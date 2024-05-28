import {
  SupportedChains,
  supportedTokens,
} from '@/app/dashboard/data/supported_tokens'
import {
  getAggregatedTotalBalance,
  getBalanceForTokenChainPairs,
} from '@/app/dashboard/utils/balance'

export const getSupportedChain = (chainId: number) => {
  return SupportedChains[chainId as keyof typeof SupportedChains]
}

export const calculateBalance = async (
  walletAddress: string,
  chainId?: number
) => {
  const filteredTokens = chainId
    ? supportedTokens
        .map((token) => ({
          ...token,
          addresses: token.addresses.filter(
            (address) => address.chainId === chainId
          ),
        }))
        .filter((token) => token.addresses.length > 0)
    : supportedTokens
  const totalBalance = await getBalanceForTokenChainPairs(
    filteredTokens,
    walletAddress
  )
  return getAggregatedTotalBalance(totalBalance)
}
