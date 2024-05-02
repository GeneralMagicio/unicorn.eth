import { Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import { ChainMetadata } from 'thirdweb/chains'

interface INetworkTab {
  chain: ChainMetadata
  action: () => void
  isConnected?: boolean
}

const NetworkTab = ({ chain, action, isConnected }: INetworkTab) => {
  return (
    <div className="flex flex-row rounded-xl px-4 py-3 border border-neutral-200 gap-2">
      <Image
        src={`/img/chains/${chain.chainId}.svg`}
        width={44}
        height={44}
        alt="chain"
      />
      <div className="flex flex-col">
        {isConnected && (
          <Typography fontVariant="small" weight="light">
            Connected Network
          </Typography>
        )}
        <Typography>{chain.name}</Typography>
      </div>
    </div>
  )
}

export default NetworkTab
