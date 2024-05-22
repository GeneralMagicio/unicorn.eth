import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import {
  activeModalAtom,
  currentPublicProfileAtom,
  currentPublicProfileNameAtom,
  currentSendTx,
} from '@/store'
import {
  Button,
  DownArrowSVG,
  Input,
  Modal,
  Tag,
  Typography,
} from '@ensdomains/thorin'
import { ModalHeader } from '../ModalHeader'
import {
  useActiveAccount,
  useActiveWallet,
  useActiveWalletChain,
} from 'thirdweb/react'
import { ChainMetadata, defineChain, getChainMetadata } from 'thirdweb/chains'
import UserBalance from '../Dashboard/UserBalance'
import NetworkTab from './NetworkTab'
import { shortenEthereumAddress } from '@/utils/strings'
import Image from 'next/image'
import { ChevronRight } from '../Icons/ChevronRight'
import { MODAL_TYPE, DEPOSIT_MODAL_TYPE } from '@/utils/modals'
import { useAuth } from '@/hooks/useAuth'

export const DepositModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const [depositTx, setDepositTx] = useAtom(currentSendTx)
  const [depositAmount, setDepositAmount] = useState<string>('')
  const [currentChain, setCurrentChain] = useState<ChainMetadata | null>(null)
  const [selectedToken, setSelectedToken] = useState<any>(null)
  const [, setActiveModal] = useAtom(activeModalAtom)
  const account = useActiveAccount()
  const userAddress = account?.address
  const wallet = useActiveWallet()
  const activeChain = useActiveWalletChain()
  const [currentPublicProfile] = useAtom(currentPublicProfileAtom)
  const [currentPublicProfileName] = useAtom(currentPublicProfileNameAtom)

  const isSmart = wallet?.id === 'smart'
  const { username } = useAuth()

  useEffect(() => {
    const setup = async () => {
      const currentChain = wallet?.getChain()
      const currentChainID = currentChain?.id
      const chain = !!currentChainID && defineChain({ id: currentChainID })
      const chainData = chain && (await getChainMetadata(chain))
      setCurrentChain(chainData || null)
    }

    setup()
  }, [userAddress, activeChain])

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex max-h-[90vh] w-full flex-col gap-5 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title={'Deposit'} />
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-row rounded-xl px-4 py-3 border border-neutral-200 gap-2">
            <Typography
              fontVariant="body"
              weight="light"
              className="flex flex-row gap-2">
              From:
              <Typography fontVariant="bodyBold">
                {isSmart
                  ? username
                  : userAddress && shortenEthereumAddress(userAddress)}
              </Typography>
            </Typography>
          </div>
          <DownArrowSVG />
          <div className="flex w-full flex-row rounded-xl px-4 py-3 border border-neutral-200 gap-2">
            <Typography
              fontVariant="body"
              weight="light"
              className="flex flex-row gap-2">
              To:{' '}
              <Typography fontVariant="bodyBold" color="accent">
                {currentPublicProfileName && currentPublicProfileName}
              </Typography>
            </Typography>
          </div>
        </div>
        {currentChain && (
          <div className="mt-6">
            <NetworkTab
              isConnected
              withArrow
              chain={currentChain}
              action={() => {
                setActiveModal(DEPOSIT_MODAL_TYPE.CHANGE_NETWORK)
              }}
            />
          </div>
        )}
        {selectedToken && (
          <div
            className="flex flex-row items-center justify-between gap-3 border rounded-2xl border-gray-200 p-3"
            onClick={() => {
              setSelectedToken(null)
            }}>
            <div className="flex flex-row justify-center gap-3">
              <Image
                src={selectedToken.icon}
                width={44}
                height={44}
                alt="chain"
                style={{ objectFit: 'contain' }}
              />
              <div className="flex flex-col">
                <Typography fontVariant="small" weight="light">
                  {selectedToken.symbol}
                </Typography>
                <Typography>{selectedToken.value}</Typography>
              </div>
            </div>
            <ChevronRight />
          </div>
        )}
        {selectedToken && (
          <div className="w-full allWhiteBg">
            <Input
              label=""
              placeholder="Amount"
              error={
                Number(depositAmount) > selectedToken.value &&
                'Not enough balance'
              }
              onChange={(e) => {
                const value = e.target.value
                  .replace(/[^0-9.]/g, '') // Allow only numbers and decimal points
                  .replace(/(\..*)\./g, '$1') // Disallow multiple decimal points
                setDepositAmount(value)
              }}
              suffix={
                <Tag
                  onClick={() => {
                    setDepositAmount(selectedToken.value)
                  }}>
                  Max
                </Tag>
              }
              value={depositAmount}
            />
          </div>
        )}
        {userAddress && !selectedToken && (
          <div className="max-h-[42vh] mt-4">
            <UserBalance
              address={userAddress}
              isSecondary={true}
              action={(pickedToken: any) => {
                setSelectedToken(pickedToken)
                setDepositAmount(pickedToken.value)
              }}
            />
          </div>
        )}
        {selectedToken && (
          <div className="my-2">
            <Button
              type="button"
              onClick={() => {
                if (Number(depositAmount) > selectedToken.value) {
                  return
                }
                console.log({
                  c: {
                    amount: depositAmount,
                    recipient: currentPublicProfile,
                    token: selectedToken,
                  },
                })
                setDepositTx({
                  amount: depositAmount,
                  destination: currentPublicProfile,
                  token: selectedToken,
                })
                setActiveModal(null)
                setActiveModal(MODAL_TYPE.SEND)
              }}>
              Send
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}
