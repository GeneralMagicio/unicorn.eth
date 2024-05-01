'use client'

import { useEffect, useState } from 'react'
import Profile from '@/components/Profile'
import axios from 'axios'
import { EnsRecordType } from '@/services/enService'

async function getAddress(account: string) {
  const res = await axios.get('/api/subname/record', {
    params: {
      label: account,
      type: EnsRecordType.ACCOUNT_ADDRESS,
    },
  })
  return res.data.ACCOUNT_ADDRESS
}

export default function Account({ params }: { params: { account: string } }) {
  const { account } = params
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    if (account) {
      getAddress(account).then((addr) => setAddress(addr))
    }
  }, [account])

  return (
    <div className="flex w-full grow flex-col">
      <div className="flex flex-col gap-10 px-[20px] py-10">
        {address ? (
          <Profile username={account} userAddress={address} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
