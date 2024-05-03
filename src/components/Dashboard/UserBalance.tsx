import { useState } from 'react'
import { Typography } from '@ensdomains/thorin'
import { TokenItem } from '@/components/TokenItem'

import useSWR from 'swr'
import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'

import { NftImage } from '@/components/Dashboard/NftImage'
import { useBalance } from '@/hooks/useBalance'

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

  const [activeTab, setActiveTab] = useState('Tokens')
  const { tokenBalance, nfts, errors, loading } = useBalance(
    address,
    isSecondary === true
  )

  const { data: tokenPrices, error } = useSWR<Record<string, number>>(
    'token-prices',
    fetchTokenPrices
  )

  // TODO: Better error handling
  if (errors.tokensError || errors.nftsError || error) return <></>
  // Probably use some spinner to indicate the loading time
  if (!tokenPrices || !tokenBalance || !nfts) return <></>
  const { nftsLoading, tokensLoading } = loading
  return (
    <div className="flex flex-col flex-start gap-4 h-[100%] ">
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
      <div className="flex flex-col gap-4 h-[100%] mb-[50px] overflow-scroll">
        {activeTab === 'Tokens' &&
          (tokensLoading ? (
            <div>Loading...</div>
          ) : (
            createCryptoTokenObject(tokenBalance, tokenPrices).map(
              (token, idx) => (
                <div key={idx} role="button" onClick={() => action?.(token)}>
                  <TokenItem token={token} />
                </div>
              )
            )
          ))}
        {activeTab === TABS[1] && (
          <div className="grid grid-cols-2 gap-4 gap-x-2 ">
            {nftsLoading ? (
              <div>Loading...</div>
            ) : (
              nfts.map((collectible, id) => (
                <div key={id} role="button">
                  <NftImage
                    src={collectible?.img || '/img/login-bg.png'}
                    placeholder={'/img/login-bg.png'}
                    name={collectible.name}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserBalance
