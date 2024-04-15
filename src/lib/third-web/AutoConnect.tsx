'use client'

import { client, smartWalletConfig } from './provider'
import { useEffect } from 'react'
import { WalletId, createWallet } from 'thirdweb/wallets'
import { useAtom } from 'jotai'
import { isAutoConnectingAtom } from '@/store'
import { useConnect } from 'thirdweb/react'
import { LAST_CONNECT_PERSONAL_WALLET_ID } from './constants'

export const useIsAutoConnecting = () => {
  const [isAutoConnecting, setIsAutoConnecting] = useAtom(isAutoConnectingAtom)

  useEffect(() => {
    console.log('is auto connecting?', isAutoConnecting)
  }, [isAutoConnecting])

  return { isAutoConnecting, setIsAutoConnecting }
}

export const ThirdwebAutoConnect = () => {
  const { setIsAutoConnecting } = useIsAutoConnecting()
  const { connect } = useConnect()

  useEffect(() => {
    const main = async () => {
      setIsAutoConnecting(true)
      try {
        const personalWalletId = localStorage.getItem(
          LAST_CONNECT_PERSONAL_WALLET_ID
        )
        if (!personalWalletId) return
        const personalWallet = createWallet(personalWalletId as WalletId)
        const personalAccount = await personalWallet.autoConnect({
          client: client,
        })
        const smartWallet = createWallet('smart', smartWalletConfig)
        await smartWallet.connect({ personalAccount, client: client })
        await connect(smartWallet)
      } finally {
        setIsAutoConnecting(false)
      }
    }

    main()
  }, [setIsAutoConnecting, connect])

  return <></>
}
