import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'
import { USER_INFO_STORAGE_KEY } from '@/lib/safe-auth-provider'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { replace } = useRouter()
  const { safeAuthPack, isAuthenticated, authStatus } = useSafeAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      if (!localStorage.getItem(USER_INFO_STORAGE_KEY)) replace('/login')
    }
  }, [replace, safeAuthPack, isAuthenticated, authStatus])

  return <>{children}</>
}
