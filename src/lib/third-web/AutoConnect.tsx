'use client'

import { AutoConnect, useIsAutoConnecting } from "thirdweb/react"
import { client, wallets, smartWalletConfig } from "./provider"
import { useEffect } from "react"

export const ThirdwebAutoConnect = () => {

  const bool = useIsAutoConnecting()

  useEffect(() => {
    console.log("is auto connecting?", bool)
  }, [bool])

  return (
    <AutoConnect
      client={client}
      wallets={wallets}
      accountAbstraction={smartWalletConfig}
      // autoConnect={{ timeout: 10000 }}
      // appMetadata={appMetadata}
    />
  )
}
