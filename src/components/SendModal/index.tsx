import { Input, Modal, Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TokenItem } from '../TokenItem'
import { ModalHandlIcon } from '../Icons/ModalHandleIcon'
import { ScanIcon } from '../Icons/Scan'
import { IconButton } from '../Styled'
import { ICryptoToken } from '@/services/types'
import { ChevronRight } from '../Icons/ChevronRight'
import { ModalHeader } from '../ModalHeader'
import { useAtom } from 'jotai'
import { selectedTokenAtom } from '@/store'

const TABS = ['Tokens', 'Collectibles']

const MOCK_TOKENS = [
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
]

export const SendModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Tokens')
  const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom)

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Send" />
        <Input
          label=""
          placeholder="To: Username or ENS address"
          clearable
          suffix={
            <div className="flex gap-1 items-center">
              <Typography color="bluePrimary">Paste</Typography>
              <IconButton colorStyle="transparent" size="small" shape="circle">
                <ScanIcon width={16} height={16} />
              </IconButton>
            </div>
          }></Input>

        {selectedToken && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-between px-4 py-2 rounded-2xl border border-gray-200">
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
              {MOCK_TOKENS.map((token, idx) => (
                <div
                  className="cursor-pointer"
                  role="button"
                  onClick={() => setSelectedToken(token)}>
                  <TokenItem key={idx} token={token} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
