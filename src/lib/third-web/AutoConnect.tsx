'use client'

import { client, smartWalletConfig } from './provider'
import { useEffect } from 'react'
import { WalletId, createWallet } from 'thirdweb/wallets'
import { useAtom } from 'jotai'
import { isAutoConnectingAtom } from '@/store'
import { useConnect } from 'thirdweb/react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  setThirdWebStorageValues,
  getThirdWebStorageValues,
  LAST_CONNECT_PERSONAL_WALLET_ID,
  clearThirdWebStorage,
} from './storage'
import { useAuth } from '@/hooks/useAuth'

export const useIsAutoConnecting = () => {
  const [isAutoConnecting, setIsAutoConnecting] = useAtom(isAutoConnectingAtom)

  return { isAutoConnecting, setIsAutoConnecting }
}

export const ThirdwebAutoConnect = () => {
  const { setIsAutoConnecting } = useIsAutoConnecting()
  const { connect } = useConnect()
  const { setUsername } = useAuth()

  const searchParams = useSearchParams()

  useEffect(() => {
    const main = async () => {
      try {
        setIsAutoConnecting(true)

        setThirdWebStorageValues(
          localStorage,
          getThirdWebStorageValues(searchParams)
        )
        const personalWalletId = localStorage.getItem(
          LAST_CONNECT_PERSONAL_WALLET_ID
        )

        if (!personalWalletId) throw new Error('Cancelled')
        const personalWallet = createWallet(personalWalletId as WalletId)
        if (!personalWallet) return
        const personalAccount = await personalWallet?.autoConnect({
          client: client,
        })
        const smartWallet = createWallet('smart', smartWalletConfig)
        await smartWallet.connect({ personalAccount, client: client })
        await connect(smartWallet)
        console.log('CONNNECTED')
      } catch (error) {
        console.error('Auto connect error', error)
        setIsAutoConnecting(false)
        clearThirdWebStorage()
        setUsername('')
      } finally {
        setIsAutoConnecting(false)
      }
    }

    main()
  }, [setIsAutoConnecting, connect])

  return <></>
}
