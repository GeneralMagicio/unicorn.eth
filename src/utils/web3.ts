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

export const calculateBalance = async (walletAddress: string) => {
  const totalBalance = await getBalanceForTokenChainPairs(
    supportedTokens,
    walletAddress
  )
  return getAggregatedTotalBalance(totalBalance)
}
