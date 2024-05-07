// import Profile from '@/components/Profile'
// import axios from 'axios'
// import { EnsRecordType } from '@/services/enService'

// async function getAddress(account: string) {
//   const res = await axios.get('/api/subname/record', {
//     params: {
//       label: account,
//       type: EnsRecordType.ACCOUNT_ADDRESS,
//     },
//   })
//   return res.data.ACCOUNT_ADDRESS
// }

export async function generateStaticParams() {
  // TODO: Get all addresses before
  // for now this is an example
  return ['dazab'].map((account) => {
    return {
      account,
      address: '0x379f6B7E32253C8e0B1c46f06051a0B803e2B642',
    }
  })
}

export default function Account({
  params,
}: {
  params: { account: string; address: string }
}) {
  const { account, address } = params

  return (
    <div className="flex flex-col gap-6">
      <p>
        your profile {account} {address}
      </p>
      {/* <Profile username={account} userAddress={address || ''} /> */}
    </div>
  )
}
