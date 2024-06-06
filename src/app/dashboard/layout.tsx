'use client'

import { AuthGuard } from '@/components/AuthGuard'
import { BottomNav } from '@/components/BottomNav'
import { CollectibleDetailModal } from '@/components/CollectibleDetailModal'
import { ReceiveModal } from '@/components/ReceiveModal'
import { ClaimDigitalStickerModal } from '@/components/Poap/ClaimDigitalStickerModal'
import { ScanModal } from '@/components/ScanModal'
import { SendModal } from '@/components/SendModal'
import { Settings } from '@/components/Settings'
import { TokenDetailModal } from '@/components/TokenDetailModal'
import { TransactionModal } from '@/components/TransactionModal'
import { activeModalAtom, currentScanAtom, isSettingEnsInfoAtom } from '@/store'
import { useAtom } from 'jotai'
import { WithdrawModal } from '@/components/WithdrawModal'
import { MODAL_TYPE } from '@/utils/modals'
import { Swap } from '@/components/Swap'
import { FullPageSpinner } from '@/components/FullPageSpinner'
import { useAuth } from '@/hooks/useAuth'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  const [currentScan, setCurrentScan] = useAtom(currentScanAtom)
  const { isUsernameSet } = useAuth()
  console.log({ isUsernameSet })
  if (!isUsernameSet) return <FullPageSpinner />
  return (
    <AuthGuard>
      <div className="flex w-full grow flex-col">
        <div className="flex h-screen flex-col gap-10 px-[20px] py-10">
          {children}
        </div>
        <BottomNav />
        <TransactionModal
          open={activeModal === MODAL_TYPE.TRANSACTION}
          onDismiss={() => setActiveModal(null)}
        />
        <SendModal
          open={activeModal === MODAL_TYPE.SEND}
          currentScan={currentScan}
          onDismiss={() => setActiveModal(null)}
        />
        <Swap />

        <ReceiveModal
          open={activeModal === MODAL_TYPE.RECEIVE}
          onDismiss={() => setActiveModal(null)}
        />
        <WithdrawModal
          open={activeModal === MODAL_TYPE.WITHDRAW}
          onDismiss={() => setActiveModal(null)}
        />
        <TokenDetailModal />
        <Settings />
        <CollectibleDetailModal />
        <ClaimDigitalStickerModal
          open={activeModal === MODAL_TYPE.CLAIM_DIGITAL_STICKER}
          onDismiss={() => setActiveModal(null)}
        />
        <ScanModal
          open={activeModal === MODAL_TYPE.SCAN}
          setCurrentScan={(val: string) => setCurrentScan(val)}
          onDismiss={() => setActiveModal(null)}
        />
      </div>
    </AuthGuard>
  )
}
