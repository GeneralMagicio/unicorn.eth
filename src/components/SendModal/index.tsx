import { Button, Input, Modal, Typography } from '@ensdomains/thorin'
import { css } from 'styled-components'
import { useState } from 'react'
import { isAddress } from 'ethers'
import { TokenItem } from '../TokenItem'
import { ScanIcon } from '../Icons/Scan'
import { IconButton } from '../Styled'
import { ChevronRight } from '../Icons/ChevronRight'
import { ModalHeader } from '../ModalHeader'
import { useAtom } from 'jotai'
import { selectedTokenAtom } from '@/store'
import { MOCK_TOKENS } from '@/utils/db'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { ICryptoToken } from '@/services/types'

const TABS = ['Tokens', 'Collectibles']

export const SendModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  {
    const [activeTab, setActiveTab] = useState('Tokens')
    const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom)
    const [destinationError, setDestinationError] = useState<string | null>(
      null
    )
    const [amountError, setAmountError] = useState<string | null>(null)
    const [destination, setDestination] = useState<string | null>(null)
    const [amount, setAmount] = useState<string | null>(null)
    const [txLoading, setTxLoading] = useState<boolean>(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [destinationWarning, setDestinationWarning] = useState<string | null>(
      null
    )
    const { sendToken, ethBalance } = useSafeAuth()

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

    const handlePaste = async () => {
      try {
        setDestinationError(null)
        const text = await navigator.clipboard.readText()
        text && setDestination(text)
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

    return (
      <Modal open={open} onDismiss={onDismiss} mobileOnly>
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader title="Send" />
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
            onChange={(e: any) => {
              setDestinationError(null)
              setDestination(e.target.value)
            }}></Input>

          {selectedToken && (
            <div className="flex flex-col gap-8">
              <div className="flex justify-between rounded-2xl border border-gray-200 px-4 py-2">
                <TokenItem token={selectedToken} showOnlyName showOnlyValue />
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
                onChange={(e: any) => {
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
                  [ethToken, ...MOCK_TOKENS].map((token, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer"
                      role="button"
                      onClick={() => {
                        if (!destination) {
                          return setDestinationError(
                            'Please enter a destination address'
                          )
                        }
                        if (!isAddress(destination)) {
                          return setDestinationError('Not a valid address')
                        }
                        setDestinationError(null)
                        setSelectedToken(token)
                      }}>
                      <TokenItem key={idx} token={token} />
                    </div>
                  ))}
              </div>
            </>
          )}
          {txLoading ? (
            <Typography>Sending transaction...</Typography>
          ) : successMessage ? (
            <Typography color="green">{successMessage}</Typography>
          ) : (
            amountError && <Typography color="red">{amountError}</Typography>
          )}
          <Button
            onClick={async () => {
              setDestinationWarning(null)
              setDestinationError(null)
              setAmountError(null)
              if (!destination) {
                return setDestinationError('Please enter a destination address')
              }
              if (!isAddress(destination)) {
                return setDestinationError('Not a valid address')
              }
              if (!amount) {
                return setAmountError('Please set an amount')
              }
              if (Number(amount) > Number(selectedToken?.value)) {
                return setAmountError('Amount exceeds balance')
              }
              // TODO: ADAPT THIS FOR ERC20, sendToken is already apt for it
              setTxLoading(true)
              const sendSuccess = await sendToken(destination, amount) // third param can be ERC20 address
              setTxLoading(false)
              if (!!sendSuccess) {
                setSuccessMessage(`Successful tx with hash ${sendSuccess}`)
              }
            }}
            className="btn-primary">
            Send
          </Button>
        </div>
      </Modal>
    )
  }
}
