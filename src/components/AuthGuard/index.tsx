import { AUTH_STATUS, useAuth } from '@/hooks/useAuth'
import { USER_INFO_STORAGE_KEY } from '@/lib/auth-provider'
import { useIsAutoConnecting } from '@/lib/third-web/AutoConnect'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'
import { useActiveWallet } from 'thirdweb/react'

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { replace } = useRouter()
  // const { safeAuthPack, isAuthenticated, authStatus } = useAuth()
  const wallet = useActiveWallet()
  const {isAutoConnecting} = useIsAutoConnecting()

  useEffect(() => {
    if (!wallet && isAutoConnecting === false) {
      replace('/login')
    }
  }, [replace, wallet, isAutoConnecting])

  return <>{children}</>
}
