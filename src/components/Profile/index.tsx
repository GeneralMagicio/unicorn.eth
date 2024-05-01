import Image from 'next/image'
import { Button, Typography } from '@ensdomains/thorin'
import { useState } from 'react'
import { TokenItem } from '@/components/TokenItem'
import { useAuth } from '@/hooks/useAuth'
import { BalanceBox, UserInfo } from '@/components/Styled'
import { priceFormatter } from '@/utils/price'

import useSWR from 'swr'
import { PromotionBox } from '@/components/Dashboard/PromotionBox'
import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'

import { NftImage } from '@/components/Dashboard/NftImage'
import { usePOAP } from '@/hooks/usePOAP'
import { ConnectButton, lightTheme, useActiveAccount } from 'thirdweb/react'
import { shortenEthereumAddress } from '@/utils/strings'
import { useBalance } from '@/hooks/useBalance'
import {
  externalClient,
  externalAllowedThirdwebWallets,
} from '@/lib/third-web/provider'

const TABS = ['Tokens', 'Collectibles']

function Profile({
  username,
  userProfilePicture,
  userAddress,
}: {
  username?: string
  userProfilePicture?: string
  userAddress?: string
}) {
  const { canMintPOAP } = usePOAP()

  const [activeTab, setActiveTab] = useState('Tokens')
  const [showPromotionBox, setShowPromotionBox] = useState(true)
  const connectedAccount = useActiveAccount()
  // const _account = { account: username, address: '0x123' }
  // User shouldn't be in the dashboard if they don't have an account
  const walletAddress = connectedAccount?.address!
  const { tokenBalance, nfts, errors } = useBalance(userAddress!)

  const { data: tokenPrices, error } = useSWR<Record<string, number>>(
    'token-prices',
    fetchTokenPrices
  )

  // TODO: Better error handling
  if (errors.tokensError || errors.nftsError || error) return
  // Probably use some spinner to indicate the loading time
  if (!tokenPrices || !tokenBalance || !nfts) return

  const estimatedTotalValue = createCryptoTokenObject(
    tokenBalance,
    tokenPrices
  ).reduce((acc, curr) => (acc += (curr.price || 0) * curr.value), 0)

  // TODO: this is a hack for now, pfp is returning undefined/undefined
  const isProperPFP = !userProfilePicture?.includes('undefined')
  return (
    <>
      <header className="flex items-center justify-between">
        <UserInfo>
          <Image
            className="rounded-full"
            src={
              isProperPFP && userProfilePicture
                ? userProfilePicture
                : '/img/validator.eth.png'
            }
            alt={username || ''}
            width={40}
            height={40}
          />
          <Typography fontVariant="bodyBold">
            {username}.{process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN}
          </Typography>
        </UserInfo>
      </header>
      <BalanceBox>
        <Typography color="inherit" fontVariant="small">
          {`Estimated Value for: ${
            connectedAccount?.address
              ? shortenEthereumAddress(connectedAccount?.address)
              : ''
          }`}
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
          createCryptoTokenObject(tokenBalance, tokenPrices).map(
            (token, idx) => (
              <div key={idx} role="button">
                <TokenItem token={token} />
              </div>
            )
          )}
        {activeTab === TABS[1] && (
          <div className="grid grid-cols-2 gap-4 gap-x-2 ">
            {nfts.map((collectible, id) => (
              <div key={id} role="button">
                <NftImage
                  src={collectible?.img || '/img/login-bg.png'}
                  placeholder={'/img/login-bg.png'}
                  name={collectible.name}
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center w-[90%] fixed bottom-6">
          {connectedAccount ? (
            <Button onClick={() => alert('Proceed with deposit')}>
              Deposit
            </Button>
          ) : (
            <ConnectButton
              wallets={externalAllowedThirdwebWallets}
              connectModal={{
                size: 'compact',
                titleIcon: '',
                showThirdwebBranding: false,
              }}
              connectButton={{
                style: {
                  width: '100%',
                },
                label: 'Deposit',
              }}
              theme={lightTheme({
                colors: {
                  primaryButtonBg: 'rgba(36, 131, 248, 1)',
                },
              })}
              client={externalClient}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Profile
