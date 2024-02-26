'use client'

import Image from 'next/image'
import { Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { ScanIcon } from '@/components/Icons/Scan'
import { useEffect, useState } from 'react'
import { TokenItem } from '@/components/TokenItem'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { BalanceBox, UserInfo } from '@/components/Styled'
import { useAtom } from 'jotai'
import { activeModalAtom, selectedCollectibleAtom, selectedTokenAtom } from '@/store'
import { MODAL_TYPE } from './layout'
import { TokenDetailModal } from '@/components/TokenDetailModal'
import { MOCK_TOKENS } from '@/utils/db'
import { getTotalBalance } from './utils/balance'
import { supportedTokens } from './data/supported_tokens'
import { Collectible } from '@/services/types'

const TABS = ['Tokens', 'Collectibles']

const MOCK_COLLECTIBLES: Collectible[] = [
  {
    id: 1,
    name: 'Cute Cat',
    org: 'Cats',
    floorPrice: 0.2,
    description: 'Cute cats are lovely',
    about: 'Cute cats are lovely',
    website: 'cute.cat',
    img: '/img/domico.eth.png',
  },
  {
    id: 2,
    name: 'LiL Noun 547',
    org: 'Lil Nouns',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    website: 'lilnouns.wtf',
    img: '/img/ln547.png',
  },
  {
    id: 3,
    name: 'LiL Noun 547',
    org: 'Lil Nouns',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    website: 'lilnouns.wtf',
    img: '/img/jefflau.eth.png',
  },
  {
    id: 4,
    name: 'LiL Noun 547',
    org: 'Lil Nouns',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    website: 'lilnouns.wtf',
    img: '/img/luc.computer.png',
  },
]

export default function Dashboard() {
  const theme = useTheme()
  const { userInfo, userName, profileImage } = useSafeAuth()
  const [activeTab, setActiveTab] = useState('Tokens')
  const [, setSelectedCollectible] = useAtom(selectedCollectibleAtom)
  const [, setSelectedToken] = useAtom(selectedTokenAtom)
  const [, setActiveModal] = useAtom(activeModalAtom)

  const calculateBalance = async () => {
    try {
      console.log('THIS STARTED RUNNING!')
      const walletAddress = '0x6Fd4FEaE970D3c7c165d9f488285Cac2F9c35434'
      const totalBalance = await getTotalBalance(supportedTokens, walletAddress)
      console.log('Total balance:', totalBalance)
    } catch (e) {
      console.error('Encountered this err:', e)
    }
  }

  // console.log("sc", selectedCollectible)
  // console.log("am", activeModal)
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
        <Typography
          onClick={calculateBalance}
          color="inherit"
          fontVariant="small">
          Estimated Value
        </Typography>
        <Typography color="text" className="!text-3xl !font-bold">
          $28,652.54
        </Typography>
      </BalanceBox>
      {/* {selectedCollectible &&
        activeModal === MODAL_TYPE.COLLECTIBLE_DETAIL && (
          <CollectibleDetailModal
            collectible={selectedCollectible}
            onDismiss={() => setActiveModal(null)}
          />
        )} */}
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
                setSelectedCollectible(collectible)
                setActiveModal(MODAL_TYPE.COLLECTIBLE_DETAIL)
              }}
              role="button">
              <Image
                className="rounded-2xl"
                src={collectible.img}
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
