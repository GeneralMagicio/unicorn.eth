import { MODAL_TYPE } from '@/app/dashboard/layout'
import { DEPOSIT_MODAL_TYPE } from '@/components/DepositModal'
import { SETTINGS_ACTION_TYPE } from '@/components/Settings/SettingsModal'
import { TRANSACTION_ACTION_TYPE } from '@/components/TransactionModal'
import { Collectible, ICryptoToken } from '@/services/types'
import { atom } from 'jotai'

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

export const tokenBalancesAtom = atom({})
export const userNFTsAtom = atom<Collectible[]>([])
export const secondaryTokenBalancesAtom = atom({})
export const secondaryUserNFTsAtom = atom<Collectible[]>([])

export const isBalanceLoadingAtom = atom({
  tokensLoading: false,
  nftsLoading: false,
})
export const errorBalanceAtom = atom<BalanceErrorState>({
  tokensError: null,
  nftsError: null,
})
