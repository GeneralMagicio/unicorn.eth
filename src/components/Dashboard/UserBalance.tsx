import { useState } from 'react'
import { Typography } from '@ensdomains/thorin'
import { TokenItem } from '@/components/TokenItem'

import useSWR from 'swr'
import {
  createCollectibleObject,
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { useAtom } from 'jotai'
import {
  activeModalAtom,
  selectedCollectibleAtom,
  selectedTokenAtom,
} from '@/store'

import { NftImage } from '@/components/Dashboard/NftImage'
import { useBalance } from '@/hooks/useBalance'
import { MODAL_TYPE } from '@/utils/modals'

interface UserBalanceProps {
  address: string
  isSecondary?: boolean
  action?: (token: any) => void
}

const TABS = ['Tokens', 'Collectibles']

const UserBalance: React.FC<UserBalanceProps> = ({
  address,
  isSecondary,
  action,
}) => {
  const [, setActiveModal] = useAtom(activeModalAtom)
  const [, setSelectedToken] = useAtom(selectedTokenAtom)
  const [, setSelectedCollectible] = useAtom(selectedCollectibleAtom)

  const [activeTab, setActiveTab] = useState('Tokens')
  const {
    tokenBalance,
    nfts: collectibleRes,
    errors,
    loading,
  } = useBalance(address, isSecondary === true)

  const { data: tokenPrices, error } = useSWR<Record<string, number>>(
    'token-prices',
    fetchTokenPrices
  )
  // TODO: Better error handling
  if (errors.tokensError || errors.nftsError || error) return <></>
  // Probably use some spinner to indicate the loading time
  if (!tokenPrices || !tokenBalance || !collectibleRes) return <></>
  const { nftsLoading, tokensLoading } = loading
  const tokens = createCryptoTokenObject(tokenBalance, tokenPrices)
  const nfts = createCollectibleObject(collectibleRes)
  return (
    <div className="flex h-[100%] flex-col gap-4">
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
      <div className="flex flex-col gap-4 h-[100%] mb-[20px] overflow-scroll">
        {activeTab === TABS[0] && (
          <div className="flex h-full flex-col gap-4 overflow-auto pb-20">
            {tokensLoading && (
              <Typography className="m-auto" fontVariant="large" color="grey">
                Loading...
              </Typography>
            )}
            {tokens.length === 0 && !tokensLoading && (
              <Typography className="m-auto" fontVariant="large" color="grey">
                No tokens found in your wallet
              </Typography>
            )}
            {tokens.map((token, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedToken(token)
                  action
                    ? action(token)
                    : setActiveModal(MODAL_TYPE.TOKEN_DETAIL)
                }}
                role="button">
                <TokenItem token={token} />
              </div>
            ))}
          </div>
        )}
        {activeTab === TABS[1] && (
          <div className="flex h-full flex-col gap-4 overflow-auto pb-20">
            {tokensLoading && (
              <Typography className="m-auto" fontVariant="large" color="grey">
                Loading...
              </Typography>
            )}
            {nfts.length === 0 && !nftsLoading && (
              <Typography className="m-auto" fontVariant="large" color="grey">
                No collectibles found in your wallet
              </Typography>
            )}
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
                    src={collectible?.img || '/img/login-bg.png'}
                    placeholder={'/img/login-bg.png'}
                    name={collectible.name}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserBalance
