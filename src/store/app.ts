import { MODAL_TYPE } from '@/app/dashboard/layout'
import { SETTINGS_ACTION_TYPE } from '@/components/SettingsModal'
import { TRANSACTION_ACTION_TYPE } from '@/components/TransactionModal'
import { ICryptoToken } from '@/services/types'
import { atom } from 'jotai'

export const activeModalAtom = atom<
  MODAL_TYPE | TRANSACTION_ACTION_TYPE | SETTINGS_ACTION_TYPE | null
>(null)

export const selectedTokenAtom = atom<ICryptoToken | null>(null)
