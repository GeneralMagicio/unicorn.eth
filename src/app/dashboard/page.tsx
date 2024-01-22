'use client'

import Image from 'next/image'
import { BalanceBox, UserInfo } from '@/components/Styled/Dashboard'
import { Modal, Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { ScanIcon } from '@/components/Icons/Scan'
import { useAtom } from 'jotai'
import { userInfoAtom } from '@/store/atoms'
import { useState } from 'react'
import { TokenItem } from '@/components/TokenItem'
import { useSafeAuth } from '@/hooks/useSafeAuth'

const TABS = ['Tokens', 'Collectibles']

const MOCK_TOKENS = [
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
  { name: 'ENS', price: 4308, value: 3726, icon: '/img/ens.png' },
]

export default function Dashboard() {
  const theme = useTheme()
  const { userInfo, userName } = useSafeAuth()
  const [activeTab, setActiveTab] = useState('Tokens')

  return (
    <div className="h-screen w-screen bg-white px-[20px] py-10">
      <div className="flex flex-col gap-10">
        <header className="flex items-center justify-between">
          <UserInfo>
            <Image
              className="rounded-full"
              src={userInfo?.profileImage || ''}
              alt={userInfo?.name || ''}
              width={40}
              height={40}
            />
            <Typography fontVariant="bodyBold">
              {userName}.unicorn.eth
            </Typography>
          </UserInfo>
          <div className="flex items-center gap-2">
            <ScanIcon color={theme.colors.grey} />
          </div>
        </header>
        <BalanceBox>
          <Typography color="inherit" fontVariant="small">
            Estimated Value
          </Typography>
          <Typography color="text" fontVariant="extraLarge">
            $28,652.54
          </Typography>
        </BalanceBox>
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
            <TokenItem key={idx} token={token} />
          ))}
        </div>
      </div>
    </div>
  )
}
