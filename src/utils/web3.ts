import { SupportedChains } from '@/app/dashboard/data/supported_tokens'

export const getSupportedChain = (chainId: number) => {
  return SupportedChains[chainId as keyof typeof SupportedChains]
}
