import { useState } from 'react'
import Image from 'next/image'

import { Button, Input, Modal, Typography } from '@ensdomains/thorin'

import { ModalHeader } from '../ModalHeader'

import { useAuth } from '@/hooks/useAuth'
import { ICryptoToken } from '@/services/types'
import useSWR from 'swr'
import { calculateBalance } from '@/utils/web3'
import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { TokenItem } from '../TokenItem'
import { useBalance } from '@/hooks/useBalance'

enum WithdrawStep {
  ConnectToExchange,
  PickToken,
  WithdrawToken,
  ConfirmWithdraw,
  Processing,
}

export const WithdrawModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  {
    const { userAddress } = useAuth()
    const { tokenBalance, errors } = useBalance(userAddress)
    const [step, setStep] = useState<WithdrawStep>(
      WithdrawStep.ConnectToExchange
    )
    const { ethBalance } = useAuth()
    const [inputError, setInputError] = useState<string | null>(null)
    const [input, setInput] = useState<string | null>(null)

    const { data: tokenPrices, error } = useSWR<Record<string, number>>(
      'token-prices',
      fetchTokenPrices
    )

    const handlePaste = async () => {
      try {
        setInputError(null)
        const text = await navigator.clipboard.readText()
        text && setInput(text)
      } catch (error) {
        console.error('Failed to read clipboard contents: ', error)
      }
    }

    const ethToken: ICryptoToken = {
      name: 'xDAI', /// TODO: check on current network
      value: Number(ethBalance),
      price: 3000,
      icon: '/img/eth.png',
    }

    const isConnectToExchange = step === WithdrawStep.ConnectToExchange
    const isPickToken = step === WithdrawStep.PickToken

    if (errors.tokensError || errors.nftsError) return
    if (!tokenPrices || !tokenBalance) return

    return (
      <Modal
        open={open}
        onDismiss={() => {
          setInput(null)
          setStep(WithdrawStep.ConnectToExchange)
          onDismiss()
        }}
        mobileOnly>
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader
            title={
              isConnectToExchange
                ? 'Connect to exchange'
                : isPickToken
                  ? 'Withdraw to Bybit'
                  : 'Withdraw'
            }
          />
          {isConnectToExchange && (
            <div className="flex flex-row gap-5 justify-between border-solid border-gray border p-[16px] rounded-[16px]">
              <Image
                src={'/img/bybit.png'}
                alt={'bybit'}
                width={46}
                height={46}
                className="rounded"
              />
              <div className="w-[100px] rounded-xl">
                <Button
                  style={{
                    height: '40px',
                    borderRadius: '25px',
                  }}
                  onClick={() => setStep(WithdrawStep.PickToken)}>
                  Setup
                </Button>
              </div>
            </div>
          )}
          {isPickToken && (
            <div className="flex flex-col items-start">
              <Typography fontVariant="extraLargeBold" className="text-center">
                Add Bybit address
              </Typography>
              <Input
                label=""
                error={inputError}
                // parentStyles={getInputParentStyles()}
                placeholder="To: 0x00..."
                clearable
                suffix={
                  <div
                    onClick={handlePaste}
                    className="flex items-center gap-1 cursor-pointer">
                    <Typography color="grey"> Paste</Typography>
                  </div>
                }
                value={input || ''}
                onChange={(e) => {
                  setInputError(null)
                  setInput(e.target.value)
                }}
              />
              <div className="w-full mt-8">
                {createCryptoTokenObject(tokenBalance, tokenPrices).map(
                  (token, idx) => (
                    <div key={idx} onClick={() => {}} role="button">
                      <TokenItem token={token} />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </Modal>
    )
  }
}
