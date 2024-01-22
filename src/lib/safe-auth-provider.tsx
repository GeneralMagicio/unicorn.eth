'use client'

import { useSafeAuth } from '@/hooks/useSafeAuth'
import {
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
} from '@/store/atoms'
import { SafeAuthInitOptions } from '@safe-global/auth-kit'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

export function SafeAuthProvider({ children }: { children: React.ReactNode }) {
  const {
    safeAuthPack,
    setSafeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setSafeAuthSignInInfo,
    setUserInfo,
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
          console.log('accountsChanged')
          if (authPack.isAuthenticated) {
            const signInInfo = await authPack?.signIn()

            setSafeAuthSignInInfo(signInInfo)
            setIsAuthenticated(true)
          }
        })
      })
    })()
  }, [setIsAuthenticated, setSafeAuthPack, setSafeAuthSignInInfo])

  useEffect(() => {
    if (!safeAuthPack || !isAuthenticated) return
    ;(async () => {
      const userInfo = await safeAuthPack.getUserInfo()
      console.log({ userInfo })
      setUserInfo(userInfo)
    })()
  }, [isAuthenticated, safeAuthPack, setUserInfo])

  return <>{children}</>
}
