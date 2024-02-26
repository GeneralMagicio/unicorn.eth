'use client'

import Image from 'next/image'
import { Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { ScanIcon } from '@/components/Icons/Scan'
import { useState } from 'react'
import { TokenItem } from '@/components/TokenItem'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { BalanceBox, UserInfo } from '@/components/Styled'
import { useAtom } from 'jotai'
import { activeModalAtom, selectedTokenAtom } from '@/store'
import { MODAL_TYPE } from './layout'
import { TokenDetailModal } from '@/components/TokenDetailModal'
import { MOCK_TOKENS } from '@/utils/db'
import { ICryptoToken } from '@/services/types'
import { priceFormatter } from '@/utils/price'

const TABS = ['Tokens', 'Collectibles']

export default function Dashboard() {
  const theme = useTheme()
  const { userInfo, userName, profileImage, ethBalance } = useSafeAuth()
  const [activeTab, setActiveTab] = useState('Tokens')
  const [, setSelectedToken] = useAtom(selectedTokenAtom)
  const [, setActiveModal] = useAtom(activeModalAtom)

  const ethToken: ICryptoToken = {
    name: 'xDAI', ///  TODO: check on current network
    value: Number(ethBalance),
    price: 3000,
    icon: '/img/eth.png',
  }

  return (
    <>
      <header className="flex  items-center justify-between">
        <UserInfo>
          <Image
            className="rounded-full"
            src={profileImage || userInfo?.profileImage || ''}
            alt={userInfo?.name || ''}
            width={40}
            height={40}
          />
          <Typography fontVariant="bodyBold">{userName}.unicorn.eth</Typography>
        </UserInfo>
        <div className="flex  items-center gap-2">
          <ScanIcon color={theme.colors.grey} />
        </div>
      </header>
      <BalanceBox>
        <Typography color="inherit" fontVariant="small">
          Estimated Value
        </Typography>
        <Typography color="text" fontVariant="extraLarge">
          {priceFormatter.format(ethToken.price * ethToken.value)}
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
        {activeTab === 'Tokens' &&
          [ethToken, ...MOCK_TOKENS].map((token, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedToken(token)
                setActiveModal(MODAL_TYPE.TOKEN_DETAIL)
              }}
              role="button">
              <TokenItem token={token} />
            </div>
          ))}
      </div>
    </>
  )
}
