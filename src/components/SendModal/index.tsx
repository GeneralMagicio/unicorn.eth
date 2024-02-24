import { Input, Modal, Typography } from '@ensdomains/thorin'
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
  const [activeTab, setActiveTab] = useState('Tokens')
  const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom)
  const [error, setError] = useState<string | null>(null)
  const [destination, setDestination] = useState<string | null>(null)
  const [amount, setAmount] = useState<string | null>(null)
  const [warning, setWaring] = useState<string | null>(null)
  const { sendToken, ethBalance } = useSafeAuth()

  const getInputParentStyles = () => {
    if (!!error) {
      return css`
        div {
          border-color: ${({ theme }) => theme.colors.red} !important;
        }
      `
    }
    if (!!warning) {
      return css`
        div {
          border-color: ${({ theme }) => theme.colors.yellow} !important;
        }
      `
    }
    return css``
  }

  const ethToken: ICryptoToken = {
    name: 'ETH',
    value: Number(ethBalance),
    price: 3000,
    icon: '/img/ens.png',
  }

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Send" />
        <Input
          label=""
          description={
            warning && <Typography color="yellow">{warning}</Typography>
          }
          error={error}
          parentStyles={getInputParentStyles()}
          placeholder="To: Username or ENS address"
          clearable
          suffix={
            <div className="flex items-center gap-1">
              <Typography color="bluePrimary">Paste</Typography>
              <IconButton colorStyle="transparent" size="small" shape="circle">
                <ScanIcon width={16} height={16} />
              </IconButton>
            </div>
          }
          onChange={(e: any) => {
            setDestination(e.target.value)
          }}></Input>

        {selectedToken && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-between rounded-2xl border border-gray-200 px-4 py-2">
              <TokenItem token={selectedToken} showOnlyName />
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
              {[ethToken, ...MOCK_TOKENS].map((token, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer"
                  role="button"
                  onClick={() => {
                    if (!isAddress(destination)) {
                      return setError('Not a valid address')
                    }
                    setError(null)
                    setSelectedToken(token)
                  }}>
                  <TokenItem key={idx} token={token} />
                </div>
              ))}
            </div>
          </>
        )}
        <button
          onClick={async () => {
            if (!destination || !amount) return
            await sendToken(destination, amount)
          }}
          className="btn-primary">
          send
        </button>
      </div>
    </Modal>
  )
}
