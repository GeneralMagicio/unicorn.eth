'use client'

import { ChangeNetworkModal } from '@/components/ChangeNetworkModal'
import { DepositModal } from '@/components/DepositModal'
import { SendModal } from '@/components/SendModal'
import {
  activeModalAtom,
  currentPublicProfileAtom,
  currentPublicProfileNameAtom,
} from '@/store'
import { DEPOSIT_MODAL_TYPE, MODAL_TYPE } from '@/utils/modals'
import { useAtom } from 'jotai'

import { useAuth } from '@/hooks/useAuth'
import { EnsRecordType, nsService } from '@/services/enService'
import { getSubdomain } from '@/utils/helpers'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import useSWR from 'swr'

import Profile from '@/components/Profile'
import { FullPageSpinner } from '@/components/FullPageSpinner'
import { appConfig } from '@/config'

// TODO: to be removed
const getSubdomainParam = () =>
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('subdomain')

export default function Home() {
  const router = useRouter()
  const { username, isUsernameSet } = useAuth()
  const [, setCurrentPublicProfile] = useAtom(currentPublicProfileAtom)
  const [, setCurrentPublicProfileName] = useAtom(currentPublicProfileNameAtom)

  const subname = useMemo(
    () =>
      getSubdomainParam() ||
      (typeof window !== 'undefined' && getSubdomain(window.location.origin)),
    []
  )

  const [activeModal, setActiveModal] = useAtom(activeModalAtom)

  const { data, isLoading } = useSWR('account-username', () =>
    subname
      ? nsService.getSubnameMetadata({
          label: subname,
          key: EnsRecordType.account_address,
        })
      : undefined
  )
  const address = data?.data

  useEffect(() => {
    if (address) {
      setCurrentPublicProfile(address)
    }
    if (subname) {
      setCurrentPublicProfileName(subname)
    }
  }, [address, subname])

  if (!username && !isLoading && !address) {
    if (appConfig.isDevMode) return router.replace('/login')
    else {
      return window.location.replace(
        `${process.env.NEXT_PUBLIC_WALLET_DOMAIN || ''}/login`
      )
    }
  }
  if (username && username === subname) {
    return router.replace('/dashboard')
  }

  console.log({
    CCCC: isLoading || !subname || !isUsernameSet || !data?.data,
    isLoading,
    subname,
    isUsernameSet,
    d: data?.data,
  })
  if (isLoading || !subname || !isUsernameSet || !data?.data)
    return <FullPageSpinner />

  return (
    <div className="flex w-full grow flex-col">
      <div className="flex flex-col gap-10 px-[20px] py-12">
        <div className="flex flex-col gap-6">
          <Profile username={subname} userAddress={address || ''} />
        </div>
      </div>
      <DepositModal
        open={activeModal === DEPOSIT_MODAL_TYPE.DEPOSIT}
        onDismiss={() => setActiveModal(null)}
      />
      <ChangeNetworkModal
        open={activeModal === DEPOSIT_MODAL_TYPE.CHANGE_NETWORK}
        onDismiss={() => {
          setActiveModal(DEPOSIT_MODAL_TYPE.DEPOSIT)
        }}
      />
      <SendModal
        open={activeModal === MODAL_TYPE.SEND}
        currentScan={null}
        isDeposit
        onDismiss={() => setActiveModal(null)}
      />
    </div>
  )
}
