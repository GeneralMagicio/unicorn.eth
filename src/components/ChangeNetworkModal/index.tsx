import React from 'react'

import { Modal } from '@ensdomains/thorin'
import { ModalHeader } from '../ModalHeader'
import { SupportedChains } from '@/app/dashboard/data/supported_tokens'

export const ChangeNetworkModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title={'Change Network'} />
        <div className="flex flex-col">
          {Object.values(SupportedChains).map((chain) => (
            <p key={chain.id}>{chain.name}</p>
          ))}
        </div>
      </div>
    </Modal>
  )
}
