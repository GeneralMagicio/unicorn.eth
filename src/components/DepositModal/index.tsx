import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import {
  activeModalAtom,
  currentPublicProfileAtom,
  currentPublicProfileNameAtom,
} from '@/store'
import { DownArrowSVG, Modal, Typography } from '@ensdomains/thorin'
import { ModalHeader } from '../ModalHeader'
import { useActiveAccount, useActiveWallet } from 'thirdweb/react'
import { ChainMetadata, defineChain, getChainMetadata } from 'thirdweb/chains'
import UserBalance from '../Dashboard/UserBalance'
import NetworkTab from './NetworkTab'
import { shortenEthereumAddress } from '@/utils/strings'

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

  const [currentPublicProfile] = useAtom(currentPublicProfileAtom)
  const [currentPublicProfileName] = useAtom(currentPublicProfileNameAtom)

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
      <div className="flex max-h-[90vh] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title={'Deposit'} />
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="flex w-full flex-row rounded-xl px-4 py-3 border border-neutral-200 gap-2">
            <Typography fontVariant="small" weight="light">
              From: <b>{userAddress && shortenEthereumAddress(userAddress)}</b>
            </Typography>
          </div>
          <DownArrowSVG />
          <div className="flex w-full flex-row rounded-xl px-4 py-3 border border-neutral-200 gap-2">
            <Typography fontVariant="small" weight="light">
              To: <b>{currentPublicProfileName && currentPublicProfileName}</b>
            </Typography>
          </div>
        </div>
        {currentChain && (
          <NetworkTab isConnected chain={currentChain} action={() => {}} />
        )}
        <div className="h-[40%]">
          {userAddress && <UserBalance address={userAddress} isSecondary />}
        </div>
      </div>
    </Modal>
  )
}
