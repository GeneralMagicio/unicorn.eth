import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { replace } = useRouter()

  useEffect(() => {}, [replace])

  return <>{children}</>
}
