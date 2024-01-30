'use client'

import { AuthGuard } from '@/components/AuthGuard'
import { BottomNav } from '@/components/BottomNav'
import { SendModal } from '@/components/SendModal'
import { SettingsModal } from '@/components/SettingsModal'
import { TokenDetailModal } from '@/components/TokenDetailModal'
import { TransactionModal } from '@/components/TransactionModal'
import { activeModalAtom } from '@/store'
import { useAtom } from 'jotai'

export const enum MODAL_TYPE {
  SETTINGS = 'SETTINGS',
  TRANSACTION = 'TRANSACTION',
  SEND = 'SEND',
  TOKEN_DETAIL = 'TOKEN_DETAIL',
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
        <SettingsModal
          open={activeModal === MODAL_TYPE.SETTINGS}
          onDismiss={() => setActiveModal(null)}
        />
        <TransactionModal
          open={activeModal === MODAL_TYPE.TRANSACTION}
          onDismiss={() => setActiveModal(null)}
        />
        <SendModal
          open={activeModal === MODAL_TYPE.SEND}
          onDismiss={() => setActiveModal(null)}
        />
        <TokenDetailModal />
      </div>
    </AuthGuard>
  )
}
