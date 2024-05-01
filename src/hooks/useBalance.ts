import { findAllNFTsOsApi } from '@/app/dashboard/utils/nft-balance-opensea'
import { fetchTokenPrices } from '@/app/dashboard/utils/tokens'
import {
  errorBalanceAtom,
  isBalanceLoadingAtom,
  secondaryTokenBalancesAtom,
  secondaryUserNFTsAtom,
  tokenBalancesAtom,
  userNFTsAtom,
} from '@/store'
import { calculateBalance } from '@/utils/web3'
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

// Atom to initiate fetching prices and balances
export const fetchBalancesAtom = atom(
  null,
  async (get, set, userAddress: string, isSecondary: boolean) => {
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

      set(isSecondary ? secondaryTokenBalancesAtom : tokenBalancesAtom, {
        ...balances,
        prices: tokenPrices,
      })
      set(isSecondary ? secondaryUserNFTsAtom : userNFTsAtom, nfts)
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

export function useBalance(userAddress: string | null, isSecondary?: boolean) {
  const [tokenBalance, setTokenBalance] = useAtom(
    isSecondary ? secondaryTokenBalancesAtom : tokenBalancesAtom
  )
  const [nfts, setNfts] = useAtom(
    isSecondary ? secondaryUserNFTsAtom : userNFTsAtom
  )
  const [, fetchBalances] = useAtom(fetchBalancesAtom)
  const [loading, setLoading] = useAtom(isBalanceLoadingAtom)
  const [errors, setErrors] = useAtom(errorBalanceAtom)

  useEffect(() => {
    if (!userAddress) {
      // Reset balances and loading state if user address is null
      setTokenBalance({})
      setNfts([])
      setLoading({ tokensLoading: false, nftsLoading: false })
      setErrors({ tokensError: null, nftsError: null })
      return
    }

    // Fetch balances for the new user address
    fetchBalances(userAddress, !!isSecondary)
  }, [
    userAddress,
    setTokenBalance,
    setNfts,
    setLoading,
    setErrors,
    fetchBalances,
  ])

  return {
    tokenBalance,
    nfts,
    loading,
    errors,
    refreshBalances: () =>
      userAddress && fetchBalances(userAddress, !!isSecondary),
  }
}
