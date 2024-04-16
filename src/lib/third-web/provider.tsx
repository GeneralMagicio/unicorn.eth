'use client'

import { ReactNode } from 'react'
import { createThirdwebClient } from 'thirdweb'
import { ThirdwebProvider } from 'thirdweb/react'
import { activeChain, clientId, factoryAddress } from './constants'

export const smartWalletConfig = {
  factoryAddress: factoryAddress,
  chain: activeChain,
  gasless: true,
}

export const client = createThirdwebClient({ clientId })

export const Thirdweb5Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
  )
}
