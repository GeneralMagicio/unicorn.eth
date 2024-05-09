'use client'

import { useCallback, useEffect } from 'react'
import { getUserEmail } from 'thirdweb/wallets/in-app'

import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useAuth } from '@/hooks/useAuth'
import { EnsRecordType, nsService } from '@/services/enService'

import axios from 'axios'
import { useActiveAccount, useActiveWallet } from 'thirdweb/react'
import { client } from './third-web/provider'
import { usePathname, useRouter } from 'next/navigation'

export const USER_INFO_STORAGE_KEY = 'unicorn-user-info'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const skipRedirect = pathname.includes('profile')

  const {
    // safeAuthPack,
    // setSafeAuthPack,
    // isAuthenticated,
    // setIsAuthenticated,
    // setSafeAuthSignInInfo,
    // setUserInfo,
    // signInInfo,
    // setUsername,
    // setAuthStatus,
    // setMainnetProvider,
    // provider,
    // setProvider,
    // signer,
    // setSigner,
    setEthBalance,
    // setProfileImage,
    // userInfo,
    setUsername,
    setUserProfilePicture,
    setUserEmail,
    setUserAddress,
    // userAddress,
    // setUserAddress,
  } = useAuth()
  const { getSubnameDataset } = useEnsResolver()

  const wallet = useActiveWallet()
  const account = useActiveAccount()
  const router = useRouter()

  // const {disconnect} = useDisconnect()

  const fetchEthBalance = useCallback(
    async (/* provider: BrowserProvider, signer: Signer */) => {
      // TODO: Rewrite the below logic with the third web methods
      setEthBalance('1')
      // try {
      //   const signerAddress = await signer.getAddress()
      //   const balance = await provider.getBalance(signerAddress)
      //   console.log(
      //     `ETH Balance for ${signerAddress}: ${ethers.formatEther(balance)} ETH`
      //   )
      //   setEthBalance(ethers.formatEther(balance))
      // } catch (error) {
      //   console.error('Failed to fetch ETH balance:', error)
      // }
    },
    [setEthBalance]
  )

  useEffect(() => {
    let goToDashboard = false
    const ensSetup = async () => {
      if (!wallet || !account) return
      setUserAddress(account.address)
      const email = await getUserEmail({ client })
      if (email) setUserEmail(email)
      try {
        const res = await getSubnameDataset(account.address)
        const username = res[res.length - 1]?.label || ''
        setUsername(username.toLowerCase())

        goToDashboard = true
        const data = await nsService.getCustomSubnameData({
          label: username,
          key: EnsRecordType.ACCOUNT_PROFILE_IMAGE_CID,
        })
        // const { data } = await axios.get('/api/subname/data', {
        //   params: {
        //     label: username,
        //     key: EnsRecordType.ACCOUNT_PROFILE_IMAGE_CID,
        //   },
        // })
        if (data)
          setUserProfilePicture(
            `${process.env.NEXT_PUBLIC_GATEWAY_URL}/${data}`
          )
        nsService.createTextRecord({
          label: username,
          key: EnsRecordType.ACCOUNT_ADDRESS,
          text: account.address,
        })
        // axios.put('/api/subname/record', {
        //   label: username,
        //   key: EnsRecordType.ACCOUNT_ADDRESS,
        //   text: account.address,
        // })
      } catch (err) {
        console.error(err)
      } finally {
        await fetchEthBalance()
        if (goToDashboard && !skipRedirect) router.push('/dashboard')
      }
    }
    ensSetup()
  }, [
    account,
    wallet,
    getSubnameDataset,
    fetchEthBalance,
    router,
    setUserAddress,
    setUserEmail,
    setUserProfilePicture,
    setUsername,
  ])

  return <>{children}</>
}
