'use client'

import { useEffect } from 'react'
import { BrowserProvider, Signer, ethers } from 'ethers'

import { useEnsResolver } from '@/hooks/useEnsResolver'
import { AUTH_STATUS, useSafeAuth } from '@/hooks/useSafeAuth'
import { EnsRecordType } from '@/services/enService'

import axios from 'axios'
import { useActiveAccount, useActiveWallet, useDisconnect } from 'thirdweb/react'

export const USER_INFO_STORAGE_KEY = 'unicorn-user-info'

export function SafeAuthProvider({ children }: { children: React.ReactNode }) {
  const {
    // safeAuthPack,
    // setSafeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    // setSafeAuthSignInInfo,
    setUserInfo,
    // signInInfo,
    setUserName,
    setAuthStatus,
    setMainnetProvider,
    provider,
    setProvider,
    signer,
    setSigner,
    setEthBalance,
    setProfileImage,
    userInfo,
    userAddress,
    setUserAddress,
  } = useSafeAuth()
  const { getSubnameDataset } = useEnsResolver()

  const wallet = useActiveWallet()
  const account = useActiveAccount()
  const {disconnect} = useDisconnect()

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

  // useEffect(() => {
  //   ;(async () => {
  //     const options: SafeAuthInitOptions = {
  //       buildEnv: 'production',
  //       enableLogging: true,
  //       showWidgetButton: false,
  //       chainConfig: {
  //         chainId: '0x64',
  //         // rpcTarget: 'https://gnosis.drpc.org',
  //         rpcTarget:
  //           'https://soft-blissful-friday.xdai.quiknode.pro/43484a3be76827b515d4fa460ea1bf08961ed9fb/',
  //       },
  //     }

  //     import('@safe-global/auth-kit').then(async ({ SafeAuthPack }) => {
  //       const authPack = new SafeAuthPack()

  //       await authPack.init(options)

  //       setSafeAuthPack(authPack)

  //       const mainnetProvider = new providers.JsonRpcProvider(
  //         'https://eth.llamarpc.com'
  //       )
  //       setMainnetProvider(mainnetProvider)

  //       authPack.subscribe('accountsChanged', async (accounts) => {
  //         if (authPack.isAuthenticated) {
  //           const signInInfo = await authPack?.signIn({})
  //           setSafeAuthSignInInfo(signInInfo)
  //           setIsAuthenticated(true)
  //         }
  //         setAuthStatus(AUTH_STATUS.RESOLVED)
  //       })
  //     })
  //   })()
  // }, [
  //   setAuthStatus,
  //   setIsAuthenticated,
  //   setSafeAuthPack,
  //   setSafeAuthSignInInfo,
  // ])

  // const authSetup = async () => {
  //   console.log({ provider, signer, isAuthenticated, safeAuthPack })
  //   if (provider && signer) return
  //   if (!isAuthenticated || !safeAuthPack) return
  //   const safeProvider: any = await new BrowserProvider(
  //     safeAuthPack?.getProvider()!
  //   )
  //   console.log('getting signer')
  //   const safeSigner = await safeProvider.getSigner()
  //   setUserInfo(userInfo)
  //   setUserAddress(await safeSigner.getAddress())

  //   setProvider(provider)
  //   setSigner(safeSigner)

  //   // Fetch ETH balance
  //   await fetchEthBalance(safeProvider, safeSigner)
  // }

  // useEffect(() => {
  //   authSetup()
  // }, [JSON.stringify(userInfo)])

  useEffect(() => {
    if (!wallet || !account) return
    ;(async () => {
      // const userInfo = await safeAuthPack.getUserInfo()
      // setUserInfo(userInfo)

      try {
        const res = await getSubnameDataset(account.address)
        const userName = res.data[res.data.length - 1].label
        setUserName(userName)

        // const { data } = await axios.get('/api/subname/data', {
        //   params: {
        //     label: userName,
        //     key: EnsRecordType.ACCOUNT_PROFILE_IMAGE,
        //   },
        // })

        // setProfileImage(data.data)
        setProfileImage('')
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
          // safeAuthPack.signOut()
          disconnect(wallet)
          setUserInfo(null)
          // setSafeAuthSignInInfo(null)
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
    setIsAuthenticated,
    setProfileImage,
    setUserInfo,
    setUserName,
    account,
    userInfo,
    disconnect,
    wallet
  ])

  return <>{children}</>
}
