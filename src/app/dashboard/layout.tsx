'use client'

import { AuthGuard } from '@/components/AuthGuard'
import { BottomNav } from '@/components/BottomNav'
import { CollectibleDetailModal } from '@/components/CollectibleDetailModal'
import { ClaimDigitalStickerModal } from '@/components/Poap/ClaimDigitalStickerModal'
import { SendModal } from '@/components/SendModal'
import { Settings } from '@/components/Settings'
import { TokenDetailModal } from '@/components/TokenDetailModal'
import { TransactionModal } from '@/components/TransactionModal'
import { activeModalAtom } from '@/store'
import { useAtom } from 'jotai'

export const enum MODAL_TYPE {
  SETTINGS = 'SETTINGS',
  TRANSACTION = 'TRANSACTION',
  SEND = 'SEND',
  TOKEN_DETAIL = 'TOKEN_DETAIL',
  SETTINGS_GENERAL = 'SETTINGS_GENERAL',
  SETTINGS_CHANGE_CURRENCY = 'SECURITY_CHANGE_CURRENCY',
  SETTINGS_ACCOUNT_DETAILS = 'SETTINGS_ACCOUNT_DETAILS',
  SETTINGS_CHANGE_DOMIAN = 'SETTINGS_CHANGE_DOMIAN',
  SETTINGS_BUY_ENS = 'SETTINGS_BUY_ENS',
  COLLECTIBLE_DETAIL = 'COLLECTIBLE_DETAIL',
  CLAIM_DIGITAL_STICKER = 'CLAIM_DIGITAL_STICKER',
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)

  return (
    <AuthGuard>
      <div className="flex w-full grow flex-col">
        <div className="flex flex-col gap-10 px-[20px] py-10">{children}</div>
        <BottomNav />
        <TransactionModal
          open={activeModal === MODAL_TYPE.TRANSACTION}
          onDismiss={() => setActiveModal(null)}
        />
        <SendModal
          open={activeModal === MODAL_TYPE.SEND}
          onDismiss={() => setActiveModal(null)}
        />
        <TokenDetailModal />
        <Settings />
        <CollectibleDetailModal />
        <ClaimDigitalStickerModal
          open={activeModal === MODAL_TYPE.CLAIM_DIGITAL_STICKER}
          onDismiss={() => setActiveModal(null)}
        />
      </div>
    </AuthGuard>
  )
}
