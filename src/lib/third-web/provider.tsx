'use client'

import { ReactNode } from 'react'
import { createThirdwebClient } from 'thirdweb'
import { AutoConnect, ThirdwebProvider } from 'thirdweb/react'
// import { inAppWallet } from "thirdweb/wallets";
import { activeChain, clientId, factoryAddress } from './constants'
import { inAppWallet, smartWallet } from 'thirdweb/wallets'

export const smartWalletConfig = {
  factoryAddress: factoryAddress,
  chain: activeChain,
  gasless: true,
}

export const wallets = [inAppWallet()]
export const client = createThirdwebClient({ clientId })

export const Thirdweb5Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
  )
}
