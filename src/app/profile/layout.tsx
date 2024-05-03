'use client'

import { ChangeNetworkModal } from '@/components/ChangeNetworkModal'
import { DepositModal } from '@/components/DepositModal'
import { SendModal } from '@/components/SendModal'
import { activeModalAtom } from '@/store'
import { DEPOSIT_MODAL_TYPE, MODAL_TYPE } from '@/utils/modals'
import { useAtom } from 'jotai'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)

  return (
    <div className="flex w-full grow flex-col">
      <div className="flex flex-col gap-10 px-[20px] py-20">{children}</div>
      <DepositModal
        open={activeModal === DEPOSIT_MODAL_TYPE.DEPOSIT}
        onDismiss={() => setActiveModal(null)}
      />
      <ChangeNetworkModal
        open={activeModal === DEPOSIT_MODAL_TYPE.CHANGE_NETWORK}
        onDismiss={() => {
          setActiveModal(DEPOSIT_MODAL_TYPE.DEPOSIT)
        }}
      />
      <SendModal
        open={activeModal === MODAL_TYPE.SEND}
        currentScan={null}
        isDeposit
        onDismiss={() => setActiveModal(null)}
      />
    </div>
  )
}
