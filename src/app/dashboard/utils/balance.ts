import { JsonRpcProvider, ethers } from 'ethers'
import { SupportedToken } from '../data/supported_tokens'

const PrecisionDigits = 4

function getProviderUrl(chainId: number) {
  // This is a public api key so don't worry.
  const infuraApiKey = '75268e971ab6449981ac429cf62c5fb7'

  const urls: Record<number, string> = {
    // Ethereum Mainnet
    1: `https://mainnet.infura.io/v3/${infuraApiKey}`,
    // Optimism Mainnet
    10: `https://optimism-mainnet.infura.io/v3/${infuraApiKey}`,
    // gnosis
    100: `https://rpc.gnosischain.com`,
    // Arbitrum One Layer  2
    42161: `https://arbitrum-mainnet.infura.io/v3/${infuraApiKey}`,
    // BSC
    56: `https://bsc-dataseed3.binance.org`,
    // Add other chain IDs and their corresponding Infura URLs here
    // For example:
    //  34: `https://scai-mainnet.infura.io/v3/${infuraApiKey}`, // SCAI Mainnet
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
  console.log('Decimals', Number(decimals) - PrecisionDigits)
  return balance / BigInt(Math.pow(10, Number(decimals) - PrecisionDigits))
}

export async function getTotalBalance(
  supportedTokens: SupportedToken[],
  walletAddress: string
) {
  let totalBalance: Record<string, bigint> = supportedTokens.reduce(
    (acc, curr, i) => ({ ...acc, [curr.symbol]: BigInt(0) }),
    {}
  )
  for (const token of supportedTokens) {
    for (const {address, chainId} of token.addresses) {
      {
        const balance = await getTokenBalance(
          chainId,
          address,
          walletAddress
        )
        totalBalance = {
          ...totalBalance,
          [token.symbol]: totalBalance[token.symbol] + balance,
        }
        if (token.symbol === 'USDC')
          console.log(`Added ${balance} USDC found on ${chainId}`)
      }
    }
  }
  const result: Record<string, number> = {}
  Object.keys(totalBalance).forEach(
    (key) =>
      (result[key] = Number(totalBalance[key]) / Math.pow(10, PrecisionDigits))
  )
  return result
}
