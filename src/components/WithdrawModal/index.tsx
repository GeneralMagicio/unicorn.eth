import { useState } from 'react'
import Image from 'next/image'
import { isAddress } from 'ethers'

import {
  Button,
  Checkbox,
  Input,
  Modal,
  Tag,
  Typography,
} from '@ensdomains/thorin'

import { ModalHeader } from '../ModalHeader'

import { useAuth } from '@/hooks/useAuth'
import { ICryptoToken } from '@/services/types'
import useSWR from 'swr'
import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { TokenItem } from '../TokenItem'
import { useBalance } from '@/hooks/useBalance'
import { truncateEthAddress } from '@/utils/strings'
import { UNICORN_MODE } from '@/store/settings'
import { UnicornButton } from '../UnicornButton'

enum WithdrawStep {
  ConnectToExchange,
  PickToken,
  WithdrawSingleToken,
  WithdrawMultipleToken,
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
    const [amountError, setAmountError] = useState<string | null>(null)
    const [singleAmount, setSingleAmount] = useState<string>('')
    const [input, setInput] = useState<string | null>(
      '0x077E5fBe6F2EEb1083AcD5877b213d5F6eE071ba'
    )
    const [selectedTokens, setSelectedTokens] = useState<string[]>([])

    const { data: tokenPrices, error } = useSWR<Record<string, number>>(
      'token-prices',
      fetchTokenPrices
    )

    const toggleTokenSelection = (event: any, tokenName: string) => {
      event.stopPropagation()
      setSelectedTokens((prevSelected) => {
        let newSelectedTokens
        if (prevSelected.includes(tokenName)) {
          newSelectedTokens = prevSelected.filter((t) => t !== tokenName)
        } else {
          newSelectedTokens = [...prevSelected, tokenName]
        }
        return newSelectedTokens
      })
    }

    const handleSelectAllTokens = () => {
      if (!tokenPrices) return
      const allTokenNames = createCryptoTokenObject(
        tokenBalance,
        tokenPrices
      ).map((token) => token.name)
      setSelectedTokens(allTokenNames)
    }

    const handlePaste = async () => {
      try {
        setInputError(null)
        const text = await navigator.clipboard.readText()
        text && setInput(text)
      } catch (error) {
        console.error('Failed to read clipboard contents: ', error)
      }
    }

    const isWithdraw =
      step === WithdrawStep.WithdrawSingleToken ||
      step === WithdrawStep.WithdrawMultipleToken
    const isConnectToExchange = step === WithdrawStep.ConnectToExchange
    const isPickToken = step === WithdrawStep.PickToken

    if (errors.tokensError || errors.nftsError) return
    if (!tokenPrices || !tokenBalance) return

    const cryptoTokens = createCryptoTokenObject(tokenBalance, tokenPrices)

    const isSingleWithdraw = selectedTokens.length === 1 && selectedTokens[0]
    const singleToken =
      !!isSingleWithdraw &&
      cryptoTokens.find((t) => t.name === isSingleWithdraw)
    const isWithdrawAll = selectedTokens.length === cryptoTokens.length
    const isWithdrawSome = selectedTokens.length > 1

    const isConfirm = step === WithdrawStep.ConfirmWithdraw

    const _dismiss = () => {
      setInput(null)
      setInputError(null)
      setSingleAmount('')
      setSelectedTokens([])
      setStep(WithdrawStep.ConnectToExchange)
      onDismiss()
    }
    const FeeItem = () => {
      return (
        <div className="flex w-full justify-between mt-4 rounded-lg bg-gray-100 py-2 px-4">
          <Typography color="text" fontVariant="small">
            Transaction Fee
          </Typography>
          <Typography
            color="blue"
            fontVariant="small">{`$1.50 (1.5 USDT)`}</Typography>
        </div>
      )
    }

    return (
      <Modal open={open} onDismiss={_dismiss} mobileOnly>
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader
            title={
              isConnectToExchange
                ? 'Connect to exchange'
                : isPickToken ||
                    isWithdrawAll ||
                    isWithdrawSome ||
                    isSingleWithdraw
                  ? 'Withdraw to  Bybit'
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
                <UnicornButton
                  style={{
                    height: '40px',
                    borderRadius: '25px',
                  }}
                  onClick={() => setStep(WithdrawStep.PickToken)}>
                  Setup
                </UnicornButton>
              </div>
            </div>
          )}
          {isPickToken && (
            <div className="flex flex-col items-start mb-4">
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
              <div className="w-full max-h-[35vh] mt-4">
                <div
                  role="button"
                  onClick={() => {}}
                  className="flex gap-4 cursor-pointer mt-4">
                  <Checkbox
                    colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
                    label={
                      <Typography fontVariant="body">
                        Withdraw Everything
                      </Typography>
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleSelectAllTokens()
                      } else {
                        setSelectedTokens([]) // Clear all selections
                      }
                    }}
                    checked={
                      selectedTokens.length ===
                      createCryptoTokenObject(tokenBalance, tokenPrices).length
                    }
                  />
                </div>
                <div className="w-full max-h-[100%] mt-2 overflow-scroll">
                  {cryptoTokens.map((token, idx) => (
                    <div
                      key={idx}
                      role="button"
                      className="flex gap-4 cursor-pointer mt-4">
                      <Checkbox
                        colorStyle={
                          UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'
                        }
                        style={{
                          margin: '50% 0 0 0',
                        }}
                        onChange={(e: any) =>
                          //TODO: maybe let's do this with something more unique than the name
                          toggleTokenSelection(e, token.name)
                        }
                        checked={selectedTokens.includes(token.name)}
                        label={
                          <TokenItem showOnlyNameAndAmount token={token} />
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {!!isWithdraw && singleToken && (
            <div className="flex flex-col items-start">
              <Typography fontVariant="extraLargeBold" className="text-center">
                Add Bybit address
              </Typography>
              <Input
                label=""
                disabled
                error={inputError}
                style={{ background: 'white' }}
                prefix={
                  <Image
                    src={'/img/bybit_2.png'}
                    alt={'bybit'}
                    width={64}
                    height={64}
                  />
                }
                // parentStyles={getInputParentStyles()}
                value={input ? truncateEthAddress(input) : ''}
              />
              <div className="w-full max-h-[35vh] p-2 mt-8 border-solid border-gray border rounded-xl">
                <TokenItem showOnlyNameAndAmount token={singleToken} />
              </div>
              <div className="w-full mt-2 allWhiteBg">
                <Input
                  label=""
                  placeholder="Amount"
                  error={
                    Number(singleAmount) > singleToken.value
                      ? 'Not enough balance'
                      : amountError
                  }
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/[^0-9.]/g, '') // Allow only numbers and decimal points
                      .replace(/(\..*)\./g, '$1') // Disallow multiple decimal points
                    setSingleAmount(value)
                  }}
                  suffix={
                    <Tag
                      onClick={() =>
                        setSingleAmount(singleToken.value.toString())
                      }>
                      Max
                    </Tag>
                  }
                  value={!!singleAmount ? singleAmount : ''}
                />
              </div>
              <FeeItem />
            </div>
          )}
          {isConfirm && singleToken && (
            <div className="flex flex-col items-start">
              <div className="w-full max-h-[35vh] p-2 border-solid border-gray border rounded-xl">
                <TokenItem reverse showOnlyNameAndAmount token={singleToken} />
              </div>
              <FeeItem />
              <div className="flex w-[100%] flex-row mt-4 justify-between gap-[10px]">
                <Button
                  onClick={async () => {
                    _dismiss()
                  }}
                  style={{ background: 'grey' }}>
                  Cancel
                </Button>
                <Button onClick={() => {}}>Confirm</Button>
              </div>
            </div>
          )}
          {!isConnectToExchange ? (
            isPickToken ? (
              <Button
                colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
                disabled={!!inputError}
                onClick={() => {
                  if (!input || !isAddress(input)) {
                    setInputError('Please enter a valid address')
                    return
                  }
                  if (selectedTokens.length === 0) {
                    setInputError('Please select at least one token')
                    return
                  }
                  if (isSingleWithdraw) {
                    setStep(WithdrawStep.WithdrawSingleToken)
                  } else {
                    setStep(WithdrawStep.WithdrawMultipleToken)
                  }
                }}>
                {isSingleWithdraw
                  ? `Withdraw ${isSingleWithdraw}`
                  : isWithdrawAll
                    ? 'Withdraw All'
                    : isWithdrawSome
                      ? 'Withdraw Selected'
                      : 'Select Tokens'}
              </Button>
            ) : null
          ) : null}
          {isWithdraw && (
            <Button
              onClick={() => {
                if (
                  Number(singleAmount) > 0 &&
                  singleToken &&
                  Number(singleAmount) <= singleToken.value
                ) {
                  setStep(WithdrawStep.ConfirmWithdraw)
                } else {
                  setAmountError('Invalid amount')
                }
              }}>
              Withdraw
            </Button>
          )}
        </div>
      </Modal>
    )
  }
}
