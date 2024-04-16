'use client'

import { useCallback, useEffect } from 'react'
import { getUserEmail } from "thirdweb/wallets/in-app";

import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useAuth } from '@/hooks/useAuth'
import { EnsRecordType } from '@/services/enService'

import axios from 'axios'
import { useActiveAccount, useActiveWallet } from 'thirdweb/react'
import { client } from './third-web/provider'
import { useRouter } from 'next/navigation';

export const USER_INFO_STORAGE_KEY = 'unicorn-user-info'

export function AuthProvider({ children }: { children: React.ReactNode }) {
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

  const fetchEthBalance = useCallback(async (/* provider: BrowserProvider, signer: Signer */) => {
    // TODO: Rewrite the below logic with the third web methods
    setEthBalance("1")
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
  }, [setEthBalance])

  useEffect(() => {
    let goToDashboard = false
    const ensSetup = async () => {
      if (!wallet || !account) return
      setUserAddress(account.address)
      const email = await getUserEmail({client})
      if (email) setUserEmail(email)
      try {
        const res = await getSubnameDataset(account.address)
        const username = res.data[res.data.length - 1].label
        setUsername(username)
        
        goToDashboard = true
        
        const { data } = await axios.get('/api/subname/data', {
          params: {
            label: username,
            key: EnsRecordType.ACCOUNT_PROFILE_IMAGE,
          },
        })
        
        setUserProfilePicture(data.data)
      } catch (err) {
        console.error(err)
      } finally {
        await fetchEthBalance()
        if (goToDashboard) router.push('/dashboard')
      }
  
    }
    ensSetup()
  }, [account, wallet, getSubnameDataset, fetchEthBalance, router, setUserAddress, setUserEmail, setUserProfilePicture, setUsername])

  return <>{children}</>
}
