import { Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import { ChainMetadata } from 'thirdweb/chains'
import { ChevronRight } from '../Icons/ChevronRight'

interface INetworkTab {
  chain: ChainMetadata
  action: () => void
  isConnected?: boolean
  withArrow?: boolean
}

const NetworkTab = ({ chain, action, isConnected, withArrow }: INetworkTab) => {
  return (
    <div
      className="flex flex-row justify-between items-center rounded-2xl p-2 border border-neutral-200 gap-3"
      onClick={() => {
        action && action()
      }}>
      <div className="flex flex-row justify-between gap-3">
        <Image
          src={`/img/chains/${chain.chainId}.svg`}
          width={44}
          height={44}
          alt="chain"
        />
        <div className="flex flex-col justify-center">
          {isConnected && (
            <Typography fontVariant="small" weight="light">
              Connected Network
            </Typography>
          )}
          <Typography>{chain.name}</Typography>
        </div>
      </div>
      {withArrow && <ChevronRight />}
    </div>
  )
}

export default NetworkTab
