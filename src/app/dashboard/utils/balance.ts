import { JsonRpcProvider, ethers } from 'ethers'
import {
  SupportedChainIds,
  SupportedToken,
  getAggregateSymbol,
  getChainIds,
} from '../data/supported_tokens'

const PrecisionDigits = 4

export function getProviderUrl(chainId: number) {
  const drpcKey = process.env.NEXT_PUBLIC_DRPC_KEY

  const urls: Record<number, string> = {
    [SupportedChainIds.Mainnet]: `https://lb.drpc.org/ogrpc?network=ethereum&dkey=${drpcKey}`,
    [SupportedChainIds.Sepolia]: `https://lb.drpc.org/ogrpc?network=sepolia&dkey=${drpcKey}`,
    [SupportedChainIds.OP]: `https://lb.drpc.org/ogrpc?network=optimism&dkey=${drpcKey}`,
    [SupportedChainIds.Gnosis]: `https://lb.drpc.org/ogrpc?network=gnosis&dkey=${drpcKey}`,
    [SupportedChainIds.Arbitrum]: `https://lb.drpc.org/ogrpc?network=arbitrum&dkey=${drpcKey}`,
    [SupportedChainIds.Base]: `https://lb.drpc.org/ogrpc?network=base&dkey=${drpcKey}`,
    [SupportedChainIds.Polygon]: `https://lb.drpc.org/ogrpc?network=polygon&dkey=${drpcKey}`,
    [SupportedChainIds.BSC]: `https://lb.drpc.org/ogrpc?network=bsc&dkey=${drpcKey}`,
  }

  return urls[chainId] || 'Chain ID not supported'
}

async function getTokenBalance(
  chainId: number,
  tokenAddress: string,
  walletAddress: string
) {
  const provider = new JsonRpcProvider(getProviderUrl(chainId))
  // when token is the native token of the chain
  if (tokenAddress === '') {
    const balance: bigint = await provider.getBalance(walletAddress)
    return balance / BigInt(Math.pow(10, 18 - PrecisionDigits))
  }
  const abi = [
    'function balanceOf(address owner) view returns (uint256 balance)',
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ]
  const contract = new ethers.Contract(tokenAddress, abi, provider)
  const [balance, decimals]: bigint[] = await Promise.all([
    contract.balanceOf(walletAddress),
    contract.decimals(),
  ])
  return balance / BigInt(Math.pow(10, Number(decimals) - PrecisionDigits))
}

export async function getBalanceForTokenChainPairs(
  supportedTokens: SupportedToken[],
  walletAddress: string
) {
  let totalBalance: Record<
    string,
    Record<SupportedChainIds, bigint>
  > = supportedTokens.reduce(
    (acc, curr, i) => ({
      ...acc,
      [curr.symbol]: getChainIds().reduce(
        (acc2, curr2) => ({ ...acc2, [curr2]: BigInt(0) }),
        {}
      ),
    }),
    {}
  )
  const promises : Promise<void>[] = []
  const func = async (symbol: string, address: string, chainId: SupportedChainIds) => {
    let result = BigInt(0)
    try {
      result = await getTokenBalance(
        chainId,
        address,
        walletAddress
      )
    } catch (e) {
      console.error("error for", e)
    }
    totalBalance[symbol][chainId] = result
  }
  for (const token of supportedTokens) {
    for (const { address, chainId } of token.addresses) {
      // if (chainId === SupportedChainIds.Arbitrum) continue
      promises.push(func(token.symbol, address, chainId))
    }
  }

  await Promise.all(promises)

  const result: Record<string, Record<SupportedChainIds, number>> = {}

  Object.keys(totalBalance).forEach(
    (key) =>
      (result[key] = getChainIds().reduce(
        (acc, curr: SupportedChainIds) => ({
          ...acc,
          [curr]:
            Number(totalBalance[key][curr]) / Math.pow(10, PrecisionDigits),
        }),
        {} as Record<SupportedChainIds, number>
      ))
  )
  return result
}

export const getAggregatedTotalBalance = (tokenChainBalances: Record<string, Record<SupportedChainIds, number>>) => {
  const result : Record<string, number> = {} 
  for (const token in tokenChainBalances) {
    for (const chain in tokenChainBalances[token]) {
      const chainId = chain as unknown as SupportedChainIds
      const amount = tokenChainBalances[token][chainId]
      const aggregateSymbol = getAggregateSymbol(token, chainId)
      result[aggregateSymbol] = (!isNaN(result[aggregateSymbol]) ? result[aggregateSymbol] : 0) + amount
    }
  }

  for (const token of Object.keys(result)) {
    result[token] = Math.round(result[token] * Math.pow(10, PrecisionDigits)) / Math.pow(10, PrecisionDigits)
  }

  return result;
}
