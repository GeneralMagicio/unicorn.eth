'use client'

import { useCallback, useEffect } from 'react'
import { getUserEmail } from 'thirdweb/wallets/in-app'

import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useAuth } from '@/hooks/useAuth'
import { EnsRecordType, nsService } from '@/services/enService'

import { useActiveAccount, useActiveWallet } from 'thirdweb/react'
import { client } from './third-web/provider'
import { usePathname, useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { isSettingEnsInfoAtom } from '@/store'
import { UNICORN_MODE } from '@/store/settings'
import { appConfig } from '@/config'
import { makeSubdominURL } from '@/utils/helpers'
import { getThirdWebStorageValues } from './third-web/storage'

export const USER_INFO_STORAGE_KEY = 'unicorn-user-info'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const skipRedirect = pathname === '/'
  const [, setIsSettingEnsInfo] = useAtom(isSettingEnsInfoAtom)

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
    const ensSetup = async () => {
      if (!wallet || !account) {
        if (
          !getThirdWebStorageValues(localStorage).lastConnectorPersonalWalletId
        ) {
          setUsername('')
        }
        return
      }
      setUserAddress(account.address)
      setIsSettingEnsInfo(true)
      let username = ''
      const email = await getUserEmail({ client })
      if (email) setUserEmail(email)
      try {
        const res = await getSubnameDataset(account.address)
        username = res.data[res.data?.length - 1]?.label || ''
        setUsername(username.toLowerCase())

        if (username) {
          nsService
            .getSubnameMetadata({
              label: username,
              key: EnsRecordType.account_avatar,
            })
            .then((data) => {
              if (data?.data)
                setUserProfilePicture(
                  `${process.env.NEXT_PUBLIC_GATEWAY_URL}/${data?.data}`
                )
              else {
                setUserProfilePicture(
                  UNICORN_MODE
                    ? '/img/unicorn-profile-placeholder.svg'
                    : '/img/profile-placeholder.svg'
                )
              }
            })
        }
        nsService.createTextRecord({
          label: username,
          key: EnsRecordType.account_address,
          data: account.address,
        })
      } catch (err) {
        console.error(err)
        setUsername(username)
      } finally {
        setIsSettingEnsInfo(false)
        fetchEthBalance()
        setUsername(username)
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
