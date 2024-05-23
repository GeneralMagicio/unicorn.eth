import {
  OsNft,
  findAllNFTsOsApi,
} from '@/app/dashboard/utils/nft-balance-opensea'
import { fetchTokenPrices } from '@/app/dashboard/utils/tokens'
import { Collectible } from '@/services/types'
import {
  errorBalanceAtom,
  isBalanceLoadingAtom,
  isSecondaryBalanceLoadingAtom,
  secondaryTokenBalancesAtom,
  secondaryUserNFTsAtom,
  tokenBalancesAtom,
  userNFTsAtom,
} from '@/store'
import { calculateBalance } from '@/utils/web3'
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

export const fetchBalancesAtom = atom(
  null,
  async (get, set, userAddress: string, isSecondary: boolean) => {
    const loadingAtom = isSecondary
      ? isSecondaryBalanceLoadingAtom
      : isBalanceLoadingAtom
    const currentLoading = get(loadingAtom)

    if (currentLoading.tokensLoading || currentLoading.nftsLoading) {
      console.log('Fetch operation already in progress...')
      return
    }

    set(loadingAtom, { tokensLoading: true, nftsLoading: true })
    set(errorBalanceAtom, { tokensError: null, nftsError: null })

    try {
      const tokenPrices = await fetchTokenPrices()
      const balances = await calculateBalance(userAddress)
      const nfts = await findAllNFTsOsApi(userAddress)

      set(isSecondary ? secondaryTokenBalancesAtom : tokenBalancesAtom, {
        ...balances,
        prices: tokenPrices,
      })
      set(isSecondary ? secondaryUserNFTsAtom : userNFTsAtom, nfts as any)
    } catch (error) {
      console.error('Failed to fetch data:', error)
      set(errorBalanceAtom, {
        tokensError: 'Failed to fetch token data',
        nftsError: 'Failed to fetch NFT data',
      })
    } finally {
      set(loadingAtom, { tokensLoading: false, nftsLoading: false })
    }
  }
)

export function useBalance(userAddress: string | null, isSecondary?: boolean) {
  const tokenBalanceAtom = isSecondary
    ? secondaryTokenBalancesAtom
    : tokenBalancesAtom
  const userNFTsAtomValue = isSecondary ? secondaryUserNFTsAtom : userNFTsAtom
  const [tokenBalance, setTokenBalance] = useAtom(tokenBalanceAtom)
  const [nfts, setNfts] = useAtom(userNFTsAtomValue)
  const [, fetchBalances] = useAtom(fetchBalancesAtom)
  const loadingAtom = isSecondary
    ? isSecondaryBalanceLoadingAtom
    : isBalanceLoadingAtom
  const [loading, setLoading] = useAtom(loadingAtom)
  const [errors, setErrors] = useAtom(errorBalanceAtom)

  useEffect(() => {
    if (!userAddress) {
      setTokenBalance({})
      setNfts([])
      setErrors({ tokensError: null, nftsError: null })
      return
    }

    fetchBalances(userAddress, !!isSecondary)
  }, [
    userAddress,
    setTokenBalance,
    setNfts,
    setLoading,
    setErrors,
    fetchBalances,
    isSecondary,
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
