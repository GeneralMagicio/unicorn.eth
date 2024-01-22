import { useSafeAuth } from '@/hooks/useSafeAuth'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { replace } = useRouter()
  const { safeAuthPack, isAuthenticated } = useSafeAuth()

  useEffect(() => {
    if (safeAuthPack) {
      // TODO: Find a way to safely redirect to the login page
      console.log('Redirecting to /login', safeAuthPack.isAuthenticated)
    }
  }, [replace, safeAuthPack, isAuthenticated])

  return <>{children}</>
}
