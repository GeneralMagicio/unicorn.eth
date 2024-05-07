'use client'

import { ReactNode } from 'react'
import { createThirdwebClient } from 'thirdweb'
import { ThirdwebProvider } from 'thirdweb/react'
import {
  activeChain,
  clientId,
  externalClientId,
  factoryAddress,
} from './constants'
import { createWallet, walletConnect } from 'thirdweb/wallets'

export const smartWalletConfig = {
  factoryAddress: factoryAddress,
  chain: activeChain,
  gasless: true,
}

export const client = createThirdwebClient({ clientId })
export const externalClient = createThirdwebClient({
  clientId: externalClientId,
})

export const externalAllowedThirdwebWallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  walletConnect(),
]

export const Thirdweb5Provider = ({ children }: { children: ReactNode }) => {
  return <ThirdwebProvider>{children}</ThirdwebProvider>
}
