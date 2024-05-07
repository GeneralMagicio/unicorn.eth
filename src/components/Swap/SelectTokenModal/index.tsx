import React from 'react'
import { ModalHeader } from '@/components/ModalHeader'
import { ICryptoToken } from '@/services/types'
import {
  Input,
  MagnifyingGlassSimpleSVG,
  Modal,
  Typography,
} from '@ensdomains/thorin'
import { useState } from 'react'
import { TokenSelectItem } from '../TokenSelectItem'
import { useSwapContext } from '../swap-context'
import { activeModalAtom } from '@/store'
import { useAtom } from 'jotai'
import { MODAL_TYPE } from '@/utils/modals'

export const SelectTokenModal: React.FC = () => {
  {
    const [activeModal, setActiveModal] = useAtom(activeModalAtom)
    const [searchTerm, setSearchTerm] = useState('')
    const { tokens, setDestinationToken } = useSwapContext()

    return (
      <Modal
        open={activeModal === MODAL_TYPE.SWAP_SELECT_TOKENS}
        onDismiss={() => {
          setActiveModal(MODAL_TYPE.SWAP)
        }}
        mobileOnly>
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader title={'Select Token'} />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<MagnifyingGlassSimpleSVG />}
            hideLabel
            label=""
            placeholder="Search tokens"
          />
          <div className="flex flex-col gap-4">
            <Typography fontVariant="extraLarge">Select token</Typography>
            {tokens
              .filter((t) => t.name.includes(searchTerm))
              .map((token) => (
                <TokenSelectItem
                  handleClick={() => {
                    setDestinationToken(token)
                    setActiveModal(MODAL_TYPE.SWAP)
                  }}
                  key={token.name}
                  token={token}
                  showMax={false}
                  showOnlyName
                />
              ))}
          </div>
        </div>
      </Modal>
    )
  }
}
