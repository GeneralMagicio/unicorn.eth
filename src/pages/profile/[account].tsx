import { useRouter } from 'next/router'
import Profile from '@/components/Profile'
import { useEffect } from 'react'
import axios from 'axios'
import { EnsRecordType } from '@/services/enService'
import PagesLayout from '@/components/PagesLayout'

export default function Account() {
  const router = useRouter()
  const account = router?.query?.account as string

  useEffect(() => {
    if (!account) return
    axios
      .get<{ record: string }>('/api/subname/data', {
        params: {
          label: account,
          type: EnsRecordType.ACCOUNT_INFO,
        },
      })
      .then((data) => {
        console.log({ data })
        if (data.data?.record) {
        }
        return {}
      })
  }, [account])

  return (
    <PagesLayout>
      <div className="flex w-full grow flex-col">
        <div className="flex flex-col gap-10 px-[20px] py-10">
          <Profile username={account} />
        </div>
      </div>
    </PagesLayout>
  )
}
