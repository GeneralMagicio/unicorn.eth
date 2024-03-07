'use client'

import { useEffect } from 'react'
import { BrowserProvider, Signer, ethers } from 'ethers'

import { useEnsResolver } from '@/hooks/useEnsResolver'
import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'
import { EnsRecordType } from '@/services/enService'

import { SafeAuthInitOptions } from '@safe-global/auth-kit'
import axios from 'axios'

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
    setEthBalance,
    setProfileImage,
    userInfo,
  } = useSafeAuth()
  const { getSubnameDataset } = useEnsResolver()

  const fetchEthBalance = async (provider: BrowserProvider, signer: Signer) => {
    if (!provider || !signer) return
    try {
      const signerAddress = await signer.getAddress()
      const balance = await provider.getBalance(signerAddress)
      console.log(
        `ETH Balance for ${signerAddress}: ${ethers.formatEther(balance)} ETH`
      )
      setEthBalance(ethers.formatEther(balance))
    } catch (error) {
      console.error('Failed to fetch ETH balance:', error)
    }
  }

  useEffect(() => {
    ;(async () => {
      const options: SafeAuthInitOptions = {
        buildEnv: 'production',
        chainConfig: {
          chainId: '0x64',
          rpcTarget: 'https://gnosis.drpc.org',
        },
      }

      import('@safe-global/auth-kit').then(async ({ SafeAuthPack }) => {
        const authPack = new SafeAuthPack()

        await authPack.init(options)

        setSafeAuthPack(authPack)
        // const provider: any = await new ethers.BrowserProvider(
        //   authPack?.getProvider()!
        // )
        // const signer = await provider.getSigner()
        // setProvider(provider)
        // setSigner(signer)

        // // Fetch ETH balance
        // await fetchEthBalance(provider, signer)

        authPack.subscribe('accountsChanged', async (accounts) => {
          if (authPack.isAuthenticated) {
            const signInInfo = await authPack?.signIn({
              loginProvider: 'google',
            })
            setSafeAuthSignInInfo(signInInfo)
            setIsAuthenticated(true)

            // // Fetch ETH balance
            // await fetchEthBalance(provider, signer)
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

      try {
        const res = await getSubnameDataset()
        const userName = res.data[res.data.length - 1].label
        setUserName(userName)

        const { data } = await axios.get('/api/subname/data', {
          params: {
            label: userName,
            key: EnsRecordType.ACCOUNT_PROFILE_IMAGE,
          },
        })

        setProfileImage(data.data)
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
    getSubnameDataset,
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
