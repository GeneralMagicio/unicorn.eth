'use client'

import Image from 'next/image'
import { Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { ScanIcon } from '@/components/Icons/Scan'
import { useState } from 'react'
import { TokenItem } from '@/components/TokenItem'
import { useAuth } from '@/hooks/useAuth'
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
import { useActiveAccount } from 'thirdweb/react'

const TABS = ['Tokens', 'Collectibles']

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

function shortenEthereumAddress(address: string) {
  if (address.length < 10) {
      return address; // Return the address as is if it's too short
  }
  const start = address.slice(0, 4); // Get the first 4 characters
  const end = address.slice(-6); // Get the last 6 characters
  return `${start}...${end}`; // Combine and return the shortened address
}


export default function Dashboard() {
  const theme = useTheme()
  const { canMintPOAP } = usePOAP()
  const { username, userProfilePicture, ethBalance, userAddress } =
    useAuth()
  const [activeTab, setActiveTab] = useState('Tokens')
  const [, setSelectedCollectible] = useAtom(selectedCollectibleAtom)
  const [, setSelectedToken] = useAtom(selectedTokenAtom)
  const [, setActiveModal] = useAtom(activeModalAtom)
  const [showPromotionBox, setShowPromotionBox] = useState(true)

  
  const account = useActiveAccount()

  // User shouldn't be in the dashboard if they don't have an account 
  const walletAddress = account?.address!

  // const { data: tokenPrices, error } = useSWR<Record<string, number>>(
  //   'token-prices',
  //   fetchTokenPrices
  // )

  // const { data: balance, error: error2 } = useSWR<Record<string, number>>(
  //   'balance',
  //   () => calculateBalance(walletAddress)
  // )

  // const { data: nfts, error: error3 } = useSWR<Collectible[]>('nfts', () =>
  //   fetchNFTs(walletAddress)
  // )

  // TODO: Better error handling
  // if (error || error2 || error3) return
  // // Probably use some spinner to indicate the loading time
  // if (!tokenPrices || !balance || !nfts) return

  // const estimatedTotalValue = createCryptoTokenObject(
  //   balance,
  //   tokenPrices
  // ).reduce((acc, curr) => (acc += curr.price * curr.value), 0)

  return (
    <>
      <header className="flex  items-center justify-between">
        <UserInfo>
          <Image
            className="rounded-full"
            src={
              userProfilePicture || '/img/validator.eth.png'
            }
            alt={ username || ''}
            width={40}
            height={40}
          />
          <Typography fontVariant="bodyBold">
            {username}.{process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN}
          </Typography>
        </UserInfo>
        <div className="flex  items-center gap-2">
          <ScanIcon
            onClick={() => setActiveModal(MODAL_TYPE.SCAN)}
            color={theme.colors.grey}
          />
        </div>
      </header>
      {/* <BalanceBox>
        <Typography color="inherit" fontVariant="small">
          {`Estimated Value for: ${account?.address ? shortenEthereumAddress(account.address) : ''}`}
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
      <div className="flex flex-col gap-4">
        {/* {activeTab === 'Tokens' &&
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
        )} */}
      </div>
    </>
  )
}
