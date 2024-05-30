import { appConfig } from '@/config'
import { useAuth } from '@/hooks/useAuth'
import { useIsAutoConnecting } from '@/lib/third-web/AutoConnect'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'
import { useActiveWallet } from 'thirdweb/react'
import { FullPageSpinner } from '../FullPageSpinner'

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { replace } = useRouter()
  const wallet = useActiveWallet()
  const { isUsernameSet } = useAuth()
  const { isAutoConnecting } = useIsAutoConnecting()

  useEffect(() => {
    if (!wallet && isAutoConnecting === false) {
      if (appConfig.isDevMode) replace('/login')
      else {
        window.location.replace(
          `${process.env.NEXT_PUBLIC_WALLET_DOMAIN || ''}/login`
        )
      }
    }
  }, [replace, wallet, isAutoConnecting])

  if (!isUsernameSet) return <FullPageSpinner />

  return <>{children}</>
}
