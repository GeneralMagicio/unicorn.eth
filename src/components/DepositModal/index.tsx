import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { Modal } from '@ensdomains/thorin'
import { ModalHeader } from '../ModalHeader'
import { useActiveAccount, useActiveWallet } from 'thirdweb/react'
import { ChainMetadata, defineChain, getChainMetadata } from 'thirdweb/chains'
import UserBalance from '../Dashboard/UserBalance'

export enum DEPOSIT_MODAL_TYPE {
  DEPOSIT = 'DEPOSIT',
  CHANGE_NETWORK = 'CHANGE_NETWORK',
}

export const DepositModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const [currentChain, setCurrentChain] = useState<ChainMetadata | null>(null)
  const [, setActiveModal] = useAtom(activeModalAtom)
  const account = useActiveAccount()
  const userAddress = account?.address
  const wallet = useActiveWallet()

  useEffect(() => {
    const setup = async () => {
      const currentChain = wallet?.getChain()
      const currentChainID = currentChain?.id
      const chain = !!currentChainID && defineChain({ id: currentChainID })
      const chainData = chain && (await getChainMetadata(chain))
      setCurrentChain(chainData || null)
    }

    setup()
  }, [userAddress])

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title={'Deposit'} />
        <p
          onClick={() => {
            setActiveModal(DEPOSIT_MODAL_TYPE.CHANGE_NETWORK)
          }}>
          {currentChain?.name}
        </p>
        {userAddress && <UserBalance address={userAddress} isSecondary />}
      </div>
    </Modal>
  )
}
