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
import { FullPageSpinner } from '../FullPageSpinner'
import { useRouter } from 'next/navigation'
import { EnsRecordType, nsService } from '@/services/enService'
import { appConfig } from '@/config'
import { UNICORN_MODE } from '@/store/settings'

function Profile({
  username,
  userProfilePicture,
  userAddress,
}: {
  username?: string
  userProfilePicture?: string
  userAddress: string
}) {
  const router = useRouter()
  const { isMobile } = useDetectDevice()
  const connectedAccount = useActiveAccount()
  const [, setActiveModal] = useAtom(activeModalAtom)
  const { tokenBalance, nfts, errors } = useBalance(userAddress!)

  const { data: tokenPrices, error } = useSWR<Record<string, number>>(
    'token-prices',
    fetchTokenPrices
  )

  const { data: imageHash } = useSWR(
    'account-profile-image',
    () =>
      nsService.getSubnameMetadata({
        label: username!,
        key: EnsRecordType.account_avatar,
      })!
  )

  const memoizedUserBalance = useMemo(
    () => (
      <div className="h-[100%] max-h-[40vh]">
        <UserBalance address={userAddress} />
      </div>
    ),
    []
  )

  // TODO: Better error handling
  if (errors.tokensError || errors.nftsError || error)
    return <div className="text-red-600">ERORR</div>

  if (!tokenPrices || !tokenBalance || !nfts) return <FullPageSpinner />

  const estimatedTotalValue = createCryptoTokenObject(
    tokenBalance,
    tokenPrices
  ).reduce((acc, curr) => (acc += (curr.price || 0) * curr.value), 0)

  if (!isMobile) return <p>mobile only</p>
  return (
    <>
      <div className="flex items-center">
        <UserInfo>
          <Image
            className="rounded-full"
            src={
              imageHash?.data
                ? `${process.env.NEXT_PUBLIC_GATEWAY_URL}/${imageHash?.data}`
                : '/img/profile-placeholder.svg'
            }
            alt={username || ''}
            width={40}
            height={40}
          />
          <Typography fontVariant="bodyBold">
            {username}
            {appConfig.ensDomain}
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
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-2">
        <div className="relative">
          <Image
            className="rounded-full"
            src={UNICORN_MODE ? '/img/logo-unicorn.png' : '/img/key.svg'}
            alt="Unicorn"
            width={44}
            height={44}
          />
        </div>
        <div
          role="button"
          onClick={() => router.push('/login')}
          className="flex flex-col justify-center gap-1 ">
          <Typography color="initial">
            Get your own {process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN} wallet
          </Typography>
        </div>
      </div>
      {memoizedUserBalance}
      <div className="fixed bottom-6 flex w-[90%] justify-center">
        {connectedAccount ? (
          <Button
            onClick={() => setActiveModal(DEPOSIT_MODAL_TYPE.DEPOSIT)}
            colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}>
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
                primaryButtonBg: UNICORN_MODE
                  ? 'var(--gradient-orange)'
                  : 'rgba(36, 131, 248, 1)',
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
