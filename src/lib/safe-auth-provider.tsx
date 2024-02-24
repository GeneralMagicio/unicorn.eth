'use client'

import { useEffect } from 'react'
import { BrowserProvider, Signer, ethers } from 'ethers'

import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'
import {
  EnsRecordType,
  getCustomSubnameData,
  getSubnameResolution,
} from '@/services/enService'

import { SafeAuthInitOptions } from '@safe-global/auth-kit'

export const USER_INFO_STORAGE_KEY = 'unicorn-user-info'

export function SafeAuthProvider({ children }: { children: React.ReactNode }) {
  const {
    safeAuthPack,
    setSafeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setSafeAuthSignInInfo,
    setUserInfo,
    signInInfo,
    setUserName,
    setAuthStatus,
    setProvider,
    setSigner,
    setProfileImage,
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
  }, [
    setAuthStatus,
    setIsAuthenticated,
    setProfileImage,
    setSafeAuthPack,
    setSafeAuthSignInInfo,
    setUserName,
  ])

  useEffect(() => {
    if (!safeAuthPack || !isAuthenticated) return
    ;(async () => {
      const userInfo = await safeAuthPack.getUserInfo()
      setUserInfo(userInfo)

      try {
        const res = await getSubnameResolution({
          address: signInInfo?.eoa!,
        })
        const userName = res[res.length - 1].label
        const data = await getCustomSubnameData({
          label: userName,
          key: EnsRecordType.ACCOUNT_PROFILE_IMAGE,
        })

        setUserName(userName)
        setProfileImage(data)
      } catch (err) {
        console.error(err)
      }

      // Checking auth storage
      const storageUserInfo = localStorage.getItem(USER_INFO_STORAGE_KEY)
      const parsedStorageInfo = storageUserInfo
        ? JSON.parse(storageUserInfo)
        : null

      if (parsedStorageInfo) {
        const time = new Date(parsedStorageInfo.time)
        if (Date.now() - time.valueOf() >= 86400 * 1000 /* 1 day */) {
          localStorage.removeItem(USER_INFO_STORAGE_KEY)
          safeAuthPack.signOut()
          setUserInfo(null)
          setSafeAuthSignInInfo(null)
          setIsAuthenticated(false)
        }
      } else {
        localStorage.setItem(
          USER_INFO_STORAGE_KEY,
          JSON.stringify({ time: Date.now(), userInfo })
        )
      }
    })()
  }, [
    isAuthenticated,
    safeAuthPack,
    setIsAuthenticated,
    setProfileImage,
    setSafeAuthSignInInfo,
    setUserInfo,
    setUserName,
    signInInfo,
  ])

  return <>{children}</>
}
