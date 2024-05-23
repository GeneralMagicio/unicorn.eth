import { MODAL_TYPE, DEPOSIT_MODAL_TYPE } from '@/utils/modals'

import { SETTINGS_ACTION_TYPE } from '@/components/Settings/SettingsModal'
import { TRANSACTION_ACTION_TYPE } from '@/components/TransactionModal'
import { Collectible, ICryptoToken } from '@/services/types'
import { atom } from 'jotai'
import { OsNft } from '@/app/dashboard/utils/nft-balance-opensea'

interface BalanceErrorState {
  tokensError: string | null
  nftsError: string | null
}

export const activeModalAtom = atom<
  | MODAL_TYPE
  | TRANSACTION_ACTION_TYPE
  | SETTINGS_ACTION_TYPE
  | DEPOSIT_MODAL_TYPE
  | null
>(null)

export const selectedTokenAtom = atom<ICryptoToken | null>(null)

export const selectedCollectibleAtom = atom<Collectible | null>(null)

export const currentScanAtom = atom<string | null>(null)
export const currentPublicProfileAtom = atom<string | null>(null)
export const currentPublicProfileNameAtom = atom<string | null>(null)

export const tokenBalancesAtom = atom({})
export const userNFTsAtom = atom<OsNft[]>([])
export const secondaryTokenBalancesAtom = atom({})
export const secondaryUserNFTsAtom = atom<OsNft[]>([])

export const isBalanceLoadingAtom = atom({
  tokensLoading: false,
  nftsLoading: false,
})
export const isSecondaryBalanceLoadingAtom = atom({
  tokensLoading: false,
  nftsLoading: false,
})

export const errorBalanceAtom = atom<BalanceErrorState>({
  tokensError: null,
  nftsError: null,
})

// TODO: Fix this type
export const currentSendTx = atom<any | null>(null)
