'use client'

import Image from 'next/image'
import { Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { ScanIcon } from '@/components/Icons/Scan'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { BalanceBox, UserInfo } from '@/components/Styled'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { priceFormatter } from '@/utils/price'
import useSWR from 'swr'
import { PromotionBox } from '@/components/Dashboard/PromotionBox'
import { createCryptoTokenObject, fetchTokenPrices } from './utils/tokens'
import { usePOAP } from '@/hooks/usePOAP'
import { useActiveAccount } from 'thirdweb/react'
import { shortenEthereumAddress } from '@/utils/strings'
import { useBalance } from '@/hooks/useBalance'
import UserBalance from '@/components/Dashboard/UserBalance'
import { MODAL_TYPE } from '@/utils/modals'

export default function Dashboard() {
  const theme = useTheme()
  const { canMintPOAP } = usePOAP()
  const { username, userProfilePicture, userAddress } = useAuth()
  const [, setActiveModal] = useAtom(activeModalAtom)
  const [showPromotionBox, setShowPromotionBox] = useState(true)
  const account = useActiveAccount()

  const { tokenBalance, nfts, errors } = useBalance(userAddress)

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

  return (
    <>
      <header className="flex  items-center justify-between">
        <UserInfo>
          <Image
            className="rounded-full"
            src={userProfilePicture || '/img/validator.eth.png'}
            alt={username || ''}
            width={40}
            height={40}
          />
          <Typography fontVariant="bodyBold">
            {username}.{process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN}
          </Typography>
        </UserInfo>
        <div
          onClick={() => setActiveModal(MODAL_TYPE.SCAN)}
          className="flex  items-center gap-2">
          <ScanIcon color={theme.colors.grey} />
        </div>
      </header>
      <BalanceBox>
        <Typography color="inherit" fontVariant="small">
          {`Estimated Value for: ${
            account?.address ? shortenEthereumAddress(account.address) : ''
          }`}
        </Typography>
        <Typography color="text" fontVariant="extraLarge">
          {priceFormatter.format(estimatedTotalValue)}
        </Typography>
      </BalanceBox>
      {true && (
        <PromotionBox
          title="Claim your digital collectible"
          subtitle="Welcome to your web3 wallet."
          onClose={() => {
            setShowPromotionBox(false)
          }}
        />
      )}

      {userAddress && (
        <div className="h-[100%]">
          <UserBalance address={userAddress} />
        </div>
      )}
    </>
  )
}
