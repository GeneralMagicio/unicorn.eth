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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (account) {
      try {
        setLoading(true)
        getAddress(account).then((addr) => setAddress(addr))
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
  }, [account])

  return (
    <div className="flex flex-col gap-6">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Profile username={account} userAddress={address || ''} />
      )}
    </div>
  )
}
