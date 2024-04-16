import { JsonRpcProvider, ethers } from 'ethers'
import {
  SupportedChainIds,
  SupportedToken,
  getAggregateSymbol,
  getChainIds,
} from '../data/supported_tokens'

const PrecisionDigits = 4

export function getProviderUrl(chainId: number) {
  // This is a public api key so don't worry.
  const infuraApiKey = '75268e971ab6449981ac429cf62c5fb7'

  const urls: Record<number, string> = {
    [SupportedChainIds.Mainnet]: `https://mainnet.infura.io/v3/${infuraApiKey}`,
    [SupportedChainIds.Sepolia]: `https://sepolia.infura.io/v3/${infuraApiKey}`,
    [SupportedChainIds.OP]: `https://optimism-mainnet.infura.io/v3/${infuraApiKey}`,
    [SupportedChainIds.Gnosis]: `https://gnosis-rpc.publicnode.com`,
    [SupportedChainIds.Arbitrum]: `https://arbitrum-mainnet.infura.io/v3/${infuraApiKey}`,
    [SupportedChainIds.Base]: `https://mainnet.base.org`,
    [SupportedChainIds.Polygon]: `https://polygon-mainnet.infura.io/v3/${infuraApiKey}`,
    [SupportedChainIds.BSC]: `https://bsc-dataseed3.binance.org`,
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
    totalBalance[symbol][chainId] = await getTokenBalance(
      chainId,
      address,
      walletAddress
    )
  }
  for (const token of supportedTokens) {
    for (const { address, chainId } of token.addresses) {
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
