'use client'

import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'
import { getSubnameResolution } from '@/services/enService'

import { SafeAuthInitOptions } from '@safe-global/auth-kit'
import { useEffect } from 'react'

export function SafeAuthProvider({ children }: { children: React.ReactNode }) {
  const {
    safeAuthPack,
    setSafeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setSafeAuthSignInInfo,
    setUserInfo,
    setUserName,
    setAuthStatus,
  } = useSafeAuth()

  useEffect(() => {
    // @ts-expect-error - Missing globals
    const params = new URL(window.document.location).searchParams
    const chainId = params.get('chainId')

    ;(async () => {
      const options: SafeAuthInitOptions = {
        buildEnv: 'production',
        chainConfig: {
          chainId: chainId || '0x64',
          rpcTarget: 'https://gnosis.drpc.org',
        },
      }

      import('@safe-global/auth-kit').then(async ({ SafeAuthPack }) => {
        const authPack = new SafeAuthPack()

        await authPack.init(options)

        setSafeAuthPack(authPack)
        authPack.subscribe('accountsChanged', async (accounts) => {
          if (authPack.isAuthenticated) {
            const signInInfo = await authPack?.signIn()
            setSafeAuthSignInInfo(signInInfo)
            setIsAuthenticated(true)
            getSubnameResolution({ address: signInInfo.eoa }).then((res) => {
              setUserName(res[res.length - 1].label)
            })
          }
          setAuthStatus(AUTH_STATUS.RESOLVED)
        })
      })
    })()
  }, [
    setAuthStatus,
    setIsAuthenticated,
    setSafeAuthPack,
    setSafeAuthSignInInfo,
  ])

  useEffect(() => {
    if (!safeAuthPack || !isAuthenticated) return
    ;(async () => {
      const userInfo = await safeAuthPack.getUserInfo()
      setUserInfo(userInfo)
    })()
  }, [isAuthenticated, safeAuthPack, setUserInfo])

  return <>{children}</>
}
