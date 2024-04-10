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
import {
  activeModalAtom,
  selectedCollectibleAtom,
  selectedTokenAtom,
} from '@/store'
import { MODAL_TYPE } from './layout'
import { Collectible, ICryptoToken } from '@/services/types'
import { priceFormatter } from '@/utils/price'
import {
  getAggregatedTotalBalance,
  getBalanceForTokenChainPairs,
} from './utils/balance'
import useSWR from 'swr'
import { supportedTokens } from './data/supported_tokens'
import { PromotionBox } from '@/components/Dashboard/PromotionBox'
import { axiosInstance } from '@/services/axiosInstance'
import { OsNft, findAllNFTsOsApi } from './utils/nft-balance-opensea'
import { trimString } from './utils'
import { NftImage } from '@/components/Dashboard/NftImage'
import axios from 'axios'
import { usePOAP } from '@/hooks/usePOAP'

const TABS = ['Tokens', 'Collectibles']

// TODO: Remove this once the smart contract integration is through
const TestWalletAddress = '0xA4D506434445Bb7303eA34A07bc38484cdC64a95' // moenick.eth

const fetchTokenPrices = async () => {
  const url = 'https://unicorn.melodicdays.shop/pricing/all'
  const res = await axiosInstance.get<Record<string, number>>(url)

  return res.data
}

const calculateBalance = async (walletAddress: string) => {
  const totalBalance = await getBalanceForTokenChainPairs(
    supportedTokens,
    walletAddress
  )
  return getAggregatedTotalBalance(totalBalance)
}

const fetchNFTs = async (walletAddress: string) => {
  const nfts = await findAllNFTsOsApi(walletAddress)

  return createCollectibleObject(nfts)
}

const createCollectibleObject = (nfts: OsNft[]) => {
  const result: Collectible[] = []
  for (const nft of nfts) {
    result.push({
      id: `${nft.collection}-${nft.identifier}`,
      org: nft.collection,
      name: nft.name || '',
      floorPrice: nft.floorPrice,
      description: trimString(nft.description || '', 100),
      about: trimString(nft.metadata?.description || '', 40),
      website: nft.metadata?.external_url || '',
      OsUrl: nft.opensea_url,
      img: nft.image_url || '',
    })
  }

  return result.sort((a, b) => b.floorPrice - a.floorPrice)
}

const createCryptoTokenObject = (
  balances: Record<string, number>,
  prices: Record<string, number>
) => {
  const result: ICryptoToken[] = []
  for (const symbol in balances) {
    const balance = balances[symbol]
    const tokenInfo = supportedTokens.find((item) => item.symbol === symbol)
    if (!tokenInfo || balance <= 0) continue
    result.push({
      name: tokenInfo.name,
      icon: tokenInfo.logo.src,
      price: prices[symbol],
      value: balance,
      symbol,
    })
  }

  return result.sort((a, b) => b.price * b.value - a.price * a.value)
}

export default function Dashboard() {
  const theme = useTheme()
  const { userInfo, userName, profileImage, ethBalance, userAddress } =
    useSafeAuth()
  const { canMintPOAP } = usePOAP()
  const [activeTab, setActiveTab] = useState('Tokens')
  const [, setSelectedCollectible] = useAtom(selectedCollectibleAtom)
  const [, setSelectedToken] = useAtom(selectedTokenAtom)
  const [, setActiveModal] = useAtom(activeModalAtom)
  const [showPromotionBox, setShowPromotionBox] = useState(true)

  // console.log("User Address:", userAddress)
  // const walletAddress = userAddress || TestWalletAddress
  // TODO: Remove this once the smart contract integration is through
  const walletAddress = TestWalletAddress

  const { data: tokenPrices, error } = useSWR<Record<string, number>>(
    'token-prices',
    fetchTokenPrices
  )

  const { data: balance, error: error2 } = useSWR<Record<string, number>>(
    'balance',
    () => calculateBalance(walletAddress)
  )

  const { data: nfts, error: error3 } = useSWR<Collectible[]>('nfts', () =>
    fetchNFTs(walletAddress)
  )

  // TODO: Better error handling
  if (error || error2 || error3) return
  // Probably use some spinner to indicate the loading time
  if (!tokenPrices || !balance || !nfts) return

  const estimatedTotalValue = createCryptoTokenObject(
    balance,
    tokenPrices
  ).reduce((acc, curr) => (acc += curr.price * curr.value), 0)

  return (
    <>
      <header className="flex  items-center justify-between">
        <UserInfo>
          <Image
            className="rounded-full"
            src={
              profileImage || userInfo?.profileImage || '/img/validator.eth.png'
            }
            alt={userInfo?.name || ''}
            width={40}
            height={40}
          />
          <Typography fontVariant="bodyBold">
            {userName}.{process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN}
          </Typography>
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
          {priceFormatter.format(estimatedTotalValue)}
        </Typography>
      </BalanceBox>
      {showPromotionBox && canMintPOAP && (
        <PromotionBox
          title="Claim your digital collectible"
          subtitle="Welcome to your web3 wallet."
          onClose={() => {
            setShowPromotionBox(false)
          }}
        />
      )}
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
          createCryptoTokenObject(balance, tokenPrices).map((token, idx) => (
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
        {activeTab === TABS[1] && (
          <div className="grid grid-cols-2 gap-4 gap-x-2 ">
            {nfts.map((collectible, id) => (
              <div
                key={id}
                onClick={() => {
                  setSelectedCollectible(collectible)
                  setActiveModal(MODAL_TYPE.COLLECTIBLE_DETAIL)
                }}
                role="button">
                <NftImage
                  src={collectible.img || '/img/login-bg.png'}
                  placeholder={'/img/login-bg.png'}
                  name={collectible.name}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
