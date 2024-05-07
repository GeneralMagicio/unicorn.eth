import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Profile from '@/components/Profile'
import axios from 'axios'
import { EnsRecordType } from '@/services/enService'
import { useAtom } from 'jotai'
import { currentPublicProfileNameAtom, currentPublicProfileAtom } from '@/store'
import { useRouter } from 'next/router'

async function getAddress(account: string) {
  const res = await axios.get('/api/subname/record', {
    params: {
      label: account,
      type: EnsRecordType.ACCOUNT_ADDRESS,
    },
  })
  return res.data.ACCOUNT_ADDRESS
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // Example:
      { params: { account: 'dazab' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { account } = params as { account: string }
  let address = ''
  try {
    address = await getAddress(account)
  } catch (error) {
    console.error('Failed to fetch address:', error)
  }

  // Return props object with the fetched data
  return {
    props: {
      account,
      address,
    },
    // Re-generate this page every 60 seconds (optional, if data changes frequently)
    revalidate: 60,
  }
}

const Account = (props: any) => {
  const router = useRouter()
  const { account } = router.query
  const [loading, setLoading] = useState(false)
  const [address, setCurrentPublicProfile] = useAtom(currentPublicProfileAtom)
  const [, setCurrentPublicProfileName] = useAtom(currentPublicProfileNameAtom)

  useEffect(() => {
    if (account) {
      try {
        setLoading(true)
        setCurrentPublicProfile(address)
        setCurrentPublicProfileName(account as string)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('Failed to set current public profile:', error)
      }
    }
  }, [account, address, setCurrentPublicProfile, setCurrentPublicProfileName])

  return (
    <>
      <div className="flex flex-col gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Profile username={account as string} userAddress={address || ''} />
        )}
      </div>
    </>
  )
}

export default Account
