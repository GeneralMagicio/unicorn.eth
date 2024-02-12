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

const TABS = ['Tokens', 'Collectibles']

interface MockCollectibles {
  id: number
  name: string
  floorPrice: number
  description: string
  about: string
  link: string
  image: string
}

const MOCK_COLLECTIBLES: MockCollectibles[] = [
  {
    id: 1,
    name: 'LiL Noun 547',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    link: 'lilnouns.wtf',
    image: '/img/ln547.png',
  },
  {
    id: 2,
    name: 'LiL Noun 547',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    link: 'lilnouns.wtf',
    image: '/img/ln547.png',
  },
  {
    id: 3,
    name: 'LiL Noun 547',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    link: 'lilnouns.wtf',
    image: '/img/ln547.png',
  },
  {
    id: 4,
    name: 'LiL Noun 547',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    link: 'lilnouns.wtf',
    image: '/img/ln547.png',
  },
]

export default function Dashboard() {
  const theme = useTheme()
  const { userInfo, userName, profileImage } = useSafeAuth()
  const [activeTab, setActiveTab] = useState('Tokens')
  const [, setSelectedToken] = useAtom(selectedTokenAtom)
  const [, setActiveModal] = useAtom(activeModalAtom)

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
        <Typography color="text" className='!text-3xl !font-bold'>
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
      {activeTab === TABS[0] && (
        <div className="flex flex-col gap-4">
          {MOCK_TOKENS.map((token, idx) => (
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
      )}
      {activeTab === TABS[1] && (
        <div className="grid grid-cols-2 gap-4 gap-x-2 ">
          {MOCK_COLLECTIBLES.map((collectible, id) => (
            <div
              key={id}
              // className='rounded-md'
              onClick={() => {
                // setSelectedToken(token)
                setActiveModal(MODAL_TYPE.COLLECTIBLE_DETAIL)
              }}
              role="button">
              <Image
                className='rounded-2xl'
                src={collectible.image}
                width={170}
                height={170}
                alt={collectible.name}
              />
              {/* <TokenItem token={token} /> */}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
