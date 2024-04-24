import { findAllNFTsOsApi } from '@/app/dashboard/utils/nft-balance-opensea'
import { fetchTokenPrices } from '@/app/dashboard/utils/tokens'
import {
  errorBalanceAtom,
  isBalanceLoadingAtom,
  tokenBalancesAtom,
  userNFTsAtom,
} from '@/store'
import { calculateBalance } from '@/utils/web3'
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

// Atom to initiate fetching prices and balances
export const fetchBalancesAtom = atom(
  null,
  async (get, set, userAddress: string) => {
    const isLoading = get(isBalanceLoadingAtom)

    // Check if any fetch operation is already in progress
    if (isLoading.tokensLoading || isLoading.nftsLoading) {
      console.log('Fetch operation already in progress...')
      return
    }

    // Set loading states
    set(isBalanceLoadingAtom, { tokensLoading: true, nftsLoading: true })
    set(errorBalanceAtom, { tokensError: null, nftsError: null })

    try {
      const tokenPrices = await fetchTokenPrices()
      const balances = await calculateBalance(userAddress)
      //TODO: fix this type
      const nfts: any = await findAllNFTsOsApi(userAddress)

      set(tokenBalancesAtom, { ...balances, prices: tokenPrices })
      set(userNFTsAtom, nfts)
    } catch (error) {
      console.error('Failed to fetch data:', error)
      set(errorBalanceAtom, {
        tokensError: 'Failed to fetch token data',
        nftsError: 'Failed to fetch NFT data',
      })
    } finally {
      set(isBalanceLoadingAtom, { tokensLoading: false, nftsLoading: false })
    }
  }
)

export function useBalance(userAddress: string | null) {
  const [tokenBalance] = useAtom(tokenBalancesAtom)
  const [nfts] = useAtom(userNFTsAtom)
  const [, fetchBalances] = useAtom(fetchBalancesAtom)
  const [loading] = useAtom(isBalanceLoadingAtom)
  const [errors] = useAtom(errorBalanceAtom)

  useEffect(() => {
    if (userAddress) {
      console.log('calling')
      fetchBalances(userAddress)
    }
  }, [userAddress, fetchBalances])

  return {
    tokenBalance,
    nfts,
    loading,
    errors,
    refreshBalances: () => userAddress && fetchBalances(userAddress),
  }
}
