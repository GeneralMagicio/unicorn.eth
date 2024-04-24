import { Button, Input, Modal, Typography } from '@ensdomains/thorin'
import { css } from 'styled-components'
import { useEffect, useState } from 'react'
import { isAddress } from 'ethers'
import useSWR from 'swr'

import { TokenItem } from '../TokenItem'
import { ScanIcon } from '../Icons/Scan'
import { IconButton } from '../Styled'
import { ChevronRight } from '../Icons/ChevronRight'
import { ModalHeader } from '../ModalHeader'
import { useAtom } from 'jotai'
import { selectedTokenAtom } from '@/store'
import { useAuth } from '@/hooks/useAuth'
import { useEnsResolver } from '@/hooks/useEnsResolver'
import SendConfirmation from './SendConfirmation'
import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { useBalance } from '@/hooks/useBalance'

const TABS = ['Tokens', 'Collectibles']

export const SendModal: React.FC<{
  open: boolean
  onDismiss: () => void
  currentScan: string | null
}> = ({ open, onDismiss, currentScan }) => {
  {
    const [activeTab, setActiveTab] = useState('Tokens')
    const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom)
    const [destinationError, setDestinationError] = useState<string | null>(
      null
    )
    const [amountError, setAmountError] = useState<string | null>(null)
    const [destination, setDestination] = useState<string | null>(null)
    const [amount, setAmount] = useState<string | null>(null)
    const [confirmTx, setConfirmTx] = useState<boolean>(false)
    const [txDone, setTxDone] = useState<boolean>(false)

    const [destinationWarning, setDestinationWarning] = useState<string | null>(
      null
    )
    const { getENSAddress } = useEnsResolver()
    const { userAddress } = useAuth()
    const { tokenBalance, errors } = useBalance(userAddress)

    const { data: tokenPrices, error } = useSWR<Record<string, number>>(
      'token-prices',
      fetchTokenPrices
    )

    const getInputParentStyles = () => {
      if (!!destinationError) {
        return css`
          div {
            border-color: ${({ theme }) => theme.colors.red} !important;
          }
        `
      }
      if (!!destinationWarning) {
        return css`
          div {
            border-color: ${({ theme }) => theme.colors.yellow} !important;
          }
        `
      }
      return css``
    }

    const startTx = async () => {
      let currentDestination = destination
      setDestinationWarning(null)
      setDestinationError(null)
      setAmountError(null)
      if (!destination) {
        return setDestinationError('Please enter a destination address')
      }

      const isEns = await getENSAddress(destination)
      !!isEns && (currentDestination = isEns)

      if (!isAddress(currentDestination)) {
        return setDestinationError('Not a valid address')
      }
      if (!amount) {
        return setAmountError('Please set an amount')
      }
      if (Number(amount) > Number(selectedToken?.value)) {
        return setAmountError('Amount exceeds balance')
      }
      setConfirmTx(true)
      setDestination(currentDestination)
    }

    const handlePaste = async () => {
      try {
        setDestinationError(null)
        const text = await navigator.clipboard.readText()
        text && setDestination(text)
      } catch (error) {
        console.error('Failed to read clipboard contents: ', error)
      }
    }

    const dismiss = () => {
      setConfirmTx(false)
      setDestination(null)
      setAmount(null)
      onDismiss()
    }

    useEffect(() => {
      setDestination(currentScan)
    }, [currentScan])

    if (errors.tokensError || errors.nftsError) return
    if (!tokenPrices || !tokenBalance) return

    return (
      <Modal open={open} onDismiss={dismiss} mobileOnly>
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader
            title={txDone ? 'Sent' : confirmTx ? 'Sending' : 'Send'}
          />
          {confirmTx ? (
            <>
              <SendConfirmation
                onDismiss={dismiss}
                setTxDone={(val) => {
                  setTxDone(val)
                }}
                setConfirmTx={(val) => setConfirmTx(val)}
                destination={destination}
                amount={amount}
                selectedToken={selectedToken}
              />
            </>
          ) : (
            <>
              <Input
                label=""
                description={
                  destinationWarning && (
                    <Typography color="yellow">{destinationWarning}</Typography>
                  )
                }
                error={destinationError}
                parentStyles={getInputParentStyles()}
                placeholder="To: Username or ENS address"
                clearable
                suffix={
                  <div
                    onClick={handlePaste}
                    className="flex items-center gap-1 cursor-pointer">
                    <Typography color="bluePrimary">Paste</Typography>
                    <IconButton
                      colorStyle="transparent"
                      size="small"
                      shape="circle">
                      <ScanIcon width={16} height={16} />
                    </IconButton>
                  </div>
                }
                value={destination || ''}
                onChange={(e) => {
                  setDestinationError(null)
                  setDestination(e.target.value)
                }}></Input>

              {selectedToken && (
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between rounded-2xl border border-gray-200 px-4 py-2">
                    <TokenItem
                      token={selectedToken}
                      showOnlyName
                      showOnlyValue
                    />
                    <IconButton
                      colorStyle="transparent"
                      size="small"
                      shape="rounded"
                      width="auto"
                      onClick={() => setSelectedToken(null)}>
                      <ChevronRight />
                    </IconButton>
                  </div>
                  <Input
                    label="Amount"
                    placeholder="0.0"
                    clearable
                    onChange={(e) => {
                      setAmount(e.target.value)
                    }}></Input>
                </div>
              )}
              {!selectedToken && (
                <>
                  <nav className="flex gap-4">
                    {TABS.map((tab, idx) => (
                      <Typography
                        role="button"
                        tabIndex={idx}
                        onClick={() => setActiveTab(tab)}
                        key={tab}
                        fontVariant="large"
                        weight="bold"
                        color={tab === activeTab ? undefined : 'grey'}>
                        {tab}
                      </Typography>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4">
                    {activeTab === 'Tokens' &&
                      createCryptoTokenObject(tokenBalance, tokenPrices).map(
                        (token, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setSelectedToken(token)
                            }}
                            role="button">
                            <TokenItem token={token} />
                          </div>
                        )
                      )}
                  </div>
                </>
              )}
              {amountError && (
                <Typography color="red">{amountError}</Typography>
              )}
              <Button onClick={startTx} className="btn-primary">
                Send
              </Button>
            </>
          )}
        </div>
      </Modal>
    )
  }
}
