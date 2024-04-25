import React from 'react'
import { ModalHeader } from '@/components/ModalHeader'
import { Modal } from '@ensdomains/thorin'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { MODAL_TYPE } from '@/app/dashboard/layout'
import { useSwapContext } from '../swap-context'
import { USDC_TOKEN } from '@/utils/db'
import { SwapForm } from '../SwapForm'
import { SwapMultiSelect } from '../SwapMultiSelect'
import { SwapConfirmation } from '../SwapConfirmation'

export const SwapModal: React.FC = () => {
  {
    const [activeModal, setActiveModal] = useAtom(activeModalAtom)
    const { setSelectedTokens, setDestinationToken, step, setStep } =
      useSwapContext()

    const titleMap: Record<number, string> = {
      0: 'Swap',
      1: 'Swap',
      2: 'Swapping',
      3: 'Swapped',
    }
    return (
      <Modal
        open={activeModal === MODAL_TYPE.SWAP}
        onDismiss={() => {
          setStep(0)
          setSelectedTokens({})
          setDestinationToken(USDC_TOKEN)
          setActiveModal(null)
        }}
        mobileOnly>
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader title={titleMap[step]} />
          {step === 0 && <SwapMultiSelect />}
          {step === 1 && <SwapForm />}
          {step === 2 && <SwapConfirmation />}
        </div>
      </Modal>
    )
  }
}
