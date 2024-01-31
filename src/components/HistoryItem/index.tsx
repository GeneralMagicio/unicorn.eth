import { ICryptoToken } from '@/services/types'
import { numberFormatter, priceFormatter } from '@/utils/price'
import { Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import { SentIcon } from '../Icons/Sent'
import { ReceivedIcon } from '../Icons/Received'
import { MnitIcon } from '../Icons/Mint'
import { SwapIcon } from '../Icons/Swap'
import { useTheme } from 'styled-components'

interface HistoryItemProps {
  token: ICryptoToken
  transactionType: 'sent' | 'received' | 'mint' | 'swapped'
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
  token,
  transactionType,
}) => {
  const theme = useTheme()
  const isDeposit =
    transactionType === 'received' || transactionType === 'swapped'

  const TRANSACTION_TYPE_ICON_MAP = {
    sent: <SentIcon />,
    received: <ReceivedIcon />,
    mint: <MnitIcon />,
    swapped: (
      <SwapIcon width={16} height={16} color={theme.colors.textSecondary} />
    ),
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <Image
          src={token.icon || '/images/ens.png'}
          alt={token.name}
          width={46}
          height={46}
          className="rounded"
        />
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-1">
            {TRANSACTION_TYPE_ICON_MAP[transactionType]}
            <Typography fontVariant="small" color="grey" className="capitalize">
              {transactionType}
            </Typography>
          </div>
          <Typography weight="bold">{token.name}</Typography>
        </div>
      </div>
      <div className="flex flex-col  items-end">
        <Typography
          fontVariant="small"
          color={isDeposit ? 'greenPrimary' : 'textSecondary'}>
          {isDeposit ? '+' : '-'}
          {numberFormatter.format(token.value)} {token.name}
        </Typography>
        <Typography weight="bold">
          {priceFormatter.format(token.price)}
        </Typography>
      </div>
    </div>
  )
}
