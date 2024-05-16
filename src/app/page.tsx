'use client'

import { ChangeNetworkModal } from '@/components/ChangeNetworkModal'
import { DepositModal } from '@/components/DepositModal'
import { SendModal } from '@/components/SendModal'
import { activeModalAtom } from '@/store'
import { DEPOSIT_MODAL_TYPE, MODAL_TYPE } from '@/utils/modals'
import { useAtom } from 'jotai'

import { useAuth } from '@/hooks/useAuth'
import { EnsRecordType, nsService } from '@/services/enService'
import { getSubdomain } from '@/utils/helpers'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import useSWR from 'swr'
// import { useIsAutoConnecting } from 'thirdweb/react'
import Profile from '@/components/Profile'
import { FullPageSpinner } from '@/components/FullPageSpinner'

export default function Home() {
  const router = useRouter()
  const { username } = useAuth()
  const searchParams = useSearchParams()

  const subname = useMemo(
    () =>
      (typeof window !== 'undefined' && getSubdomain(window.location.origin)) ||
      searchParams.get('subdomain'),
    []
  )

  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  // const isAutoConnecting = useIsAutoConnecting()

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
    if (!username && !isLoading && !address) {
      router.replace('/login')
    }
    // TODO: we can enable auto redication to dashboard whenever the subname is the logged in user
    // if (username && username === subname) {
    //   router.replace('/dashboard')
    // }
  }, [router, isLoading, address])

  if (isLoading || !subname) return <FullPageSpinner />

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
