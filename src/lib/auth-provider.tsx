'use client'

import { useCallback, useEffect } from 'react'
import { getUserEmail } from "thirdweb/wallets/in-app";

import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useAuth } from '@/hooks/useAuth'
import { EnsRecordType } from '@/services/enService'

import axios from 'axios'
import { useActiveAccount, useActiveWallet } from 'thirdweb/react'
import { client } from './third-web/provider'

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
    // setUserName,
    // setAuthStatus,
    // setMainnetProvider,
    // provider,
    // setProvider,
    // signer,
    // setSigner,
    setEthBalance,
    // setProfileImage,
    // userInfo,
    setUserInfo
    // userAddress,
    // setUserAddress,
  } = useAuth()
  const { getSubnameDataset } = useEnsResolver()

  const wallet = useActiveWallet()
  const account = useActiveAccount()
  // const {disconnect} = useDisconnect()

  const fetchEthBalance = useCallback(async (/* provider: BrowserProvider, signer: Signer */) => {
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
    const authSetup = async () => {
      if (!wallet || !account) return
      setUserInfo({address: account.address})
      const email = await getUserEmail({client})
      setUserInfo({email})
      try {
        const res = await getSubnameDataset(account.address)
        const userName = res.data[res.data.length - 1].label
        setUserInfo({userName})
  
        const { data } = await axios.get('/api/subname/data', {
          params: {
            label: userName,
            key: EnsRecordType.ACCOUNT_PROFILE_IMAGE,
          },
        })
  
        setUserInfo({profilePicture: data.data})
      } catch (err) {
        console.error(err)
      }
  
      // Fetch ETH balance
      await fetchEthBalance()
    }
    authSetup()
  }, [account, setUserInfo, wallet, getSubnameDataset, fetchEthBalance])

  return <>{children}</>
}
