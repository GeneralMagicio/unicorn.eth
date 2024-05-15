'use client'
import { useMemo } from 'react'
import Image from 'next/image'
import { Button, Typography } from '@ensdomains/thorin'
import { BalanceBox, UserInfo } from '@/components/Styled'
import { priceFormatter } from '@/utils/price'

import useSWR from 'swr'
import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'

import { shortenEthereumAddress } from '@/utils/strings'
import { useBalance } from '@/hooks/useBalance'
import UserBalance from '../Dashboard/UserBalance'
import { ConnectButton, lightTheme, useActiveAccount } from 'thirdweb/react'
import {
  externalAllowedThirdwebWallets,
  externalClient,
} from '@/lib/third-web/provider'
import { DEPOSIT_MODAL_TYPE } from '@/utils/modals'
import useDetectDevice from '@/hooks/useDetectDevice'

function Profile({
  username,
  userProfilePicture,
  userAddress,
}: {
  username?: string
  userProfilePicture?: string
  userAddress: string
}) {
  const { isMobile } = useDetectDevice()
  const connectedAccount = useActiveAccount()
  const [, setActiveModal] = useAtom(activeModalAtom)
  const { tokenBalance, nfts, errors } = useBalance(userAddress!)

  const { data: tokenPrices, error } = useSWR<Record<string, number>>(
    'token-prices',
    fetchTokenPrices
  )

  const memoizedUserBalance = useMemo(
    () => (
      <div className="max-h-[40vh] h-[100%]">
        <UserBalance address={userAddress} />
      </div>
    ),
    []
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
  if (!isMobile) return <p>mobile only</p>
  return (
    <>
      <div className="flex items-center">
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
      </div>
      <BalanceBox>
        <Typography color="inherit" fontVariant="small">
          {`Estimated Value for: ${
            userAddress ? shortenEthereumAddress(userAddress) : ''
          }`}
        </Typography>
        <Typography color="text" fontVariant="extraLarge">
          {priceFormatter.format(estimatedTotalValue)}
        </Typography>
      </BalanceBox>
      <div className="flex align-center gap-2 bg-gray-100 rounded-xl p-2">
        <div className="relative">
          <Image
            className="rounded-full"
            src="/img/key.svg"
            alt="Unicorn"
            width={44}
            height={44}
          />
        </div>
        <div className="flex flex-col justify-center gap-1 ">
          <Typography color="initial">
            Get your own account.eth wallet
          </Typography>
        </div>
      </div>
      {memoizedUserBalance}
      <div className="flex justify-center w-[90%] fixed bottom-6">
        {connectedAccount ? (
          <Button onClick={() => setActiveModal(DEPOSIT_MODAL_TYPE.DEPOSIT)}>
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
            onConnect={() => {
              setActiveModal(DEPOSIT_MODAL_TYPE.DEPOSIT)
            }}
            client={externalClient}
          />
        )}
      </div>
    </>
  )
}

export default Profile
