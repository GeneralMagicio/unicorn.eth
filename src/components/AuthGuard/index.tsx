import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { replace } = useRouter()
  const { safeAuthPack, isAuthenticated, signInInfo, authStatus } =
    useSafeAuth()

  useEffect(() => {
    console.log({ authStatus, safeAuthPack })
    if (
      safeAuthPack &&
      authStatus === AUTH_STATUS.RESOLVED &&
      !isAuthenticated
    ) {
      // TODO: Find a way to safely redirect to the login page
      console.log('Redirecting to /login', safeAuthPack.isAuthenticated)
      //   replace('/login')
    }
  }, [replace, safeAuthPack, isAuthenticated, authStatus])

  return <>{children}</>
}
