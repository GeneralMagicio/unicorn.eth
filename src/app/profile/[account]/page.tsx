import Profile from '@/components/Profile'

export async function generateStaticParams() {
  // TODO: From external BE we need to get all addresses before
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
      <Profile username={account} userAddress={address || ''} />
    </div>
  )
}
