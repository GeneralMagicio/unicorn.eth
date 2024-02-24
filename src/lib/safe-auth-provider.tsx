'use client'

import { useEffect } from 'react'
import { BrowserProvider, Signer, ethers } from 'ethers'

import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'

import { SafeAuthInitOptions } from '@safe-global/auth-kit'

export function SafeAuthProvider({ children }: { children: React.ReactNode }) {
  const {
    safeAuthPack,
    setSafeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setSafeAuthSignInInfo,
    setUserInfo,
    setAuthStatus,
    setProvider,
    setSigner,
  } = useSafeAuth()

  const fetchEthBalance = async (provider: BrowserProvider, signer: Signer) => {
    console.log('FETCH BALANCE', {
      provider,
      signer,
      isAuthenticated,
    })
    if (!provider || !signer || !isAuthenticated) return
    try {
      const signerAddress = await signer.getAddress()
      const balance = await provider.getBalance(signerAddress)
      console.log(
        `ETH Balance for ${signerAddress}: ${ethers.formatEther(balance)} ETH`
      )
      // Here you can set the ETH balance in your state or context for global access
    } catch (error) {
      console.error('Failed to fetch ETH balance:', error)
    }
  }

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
        const provider: any = await new ethers.BrowserProvider(
          authPack?.safeAuthEmbed.provider!
        )
        const signer = await provider.getSigner()
        setProvider(provider)
        setSigner(signer)
        authPack.subscribe('accountsChanged', async (accounts) => {
          console.log('accountsChanged')
          if (authPack.isAuthenticated) {
            const signInInfo = await authPack?.signIn()
            setSafeAuthSignInInfo(signInInfo)
            setIsAuthenticated(true)

            // Fetch ETH balance
            await fetchEthBalance(provider, signer)
          }
          setAuthStatus(AUTH_STATUS.RESOLVED)
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
