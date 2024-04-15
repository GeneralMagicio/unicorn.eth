'use client'

import { client, smartWalletConfig } from './provider'
import { useEffect } from 'react'
import { WalletId, createWallet } from 'thirdweb/wallets'
import { useAtom } from 'jotai'
import { isAutoConnectingAtom } from '@/store'
import { useConnect } from 'thirdweb/react'

export const useIsAutoConnecting = () => {
  const [isAutoConnecting, setIsAutoConnecting] = useAtom(isAutoConnectingAtom)

  useEffect(() => {
    console.log('is auto connecting?', isAutoConnecting)
  }, [isAutoConnecting])


  return {isAutoConnecting, setIsAutoConnecting}
  
}

export const ThirdwebAutoConnect = () => {
  const {setIsAutoConnecting} = useIsAutoConnecting()
  const {connect} = useConnect()

  useEffect(() => {
    const main = async () => {
      console.log("setting autoconnect to true")
      setIsAutoConnecting(true)
      try {
        const personalWalletId = localStorage.getItem(
          'last-connect-personal-wallet-id'
        )
        if (!personalWalletId) {
          console.log("No pw id")
          return
        }
        console.log("pwid", personalWalletId)
        const personalWallet = createWallet(personalWalletId as WalletId)
        console.log("pw", personalWallet)
        const personalAccount = await personalWallet.autoConnect({ client: client })
        console.log("pa:", personalAccount)
        const smartWallet = createWallet('smart', smartWalletConfig)
        await smartWallet.connect({ personalAccount, client: client })
        await connect(smartWallet)
        // console.log("sw:", personalAccount)
      } finally {
        console.log("setting autoconnect to false")
        setIsAutoConnecting(false)
      }
    }

    main()
  }, [setIsAutoConnecting, connect])


  return <></>
}
