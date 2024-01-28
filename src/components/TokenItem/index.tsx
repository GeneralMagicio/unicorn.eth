import { numberFormatter, priceFormatter } from '@/utils/price'
import { Typography } from '@ensdomains/thorin'
import Image from 'next/image'
interface TokenItemProps {
  token: {
    name: string
    price: number
    value: number
    icon: string
  }
  label?: string
  showOnlyName?: boolean
}

export const TokenItem: React.FC<TokenItemProps> = ({
  token,
  label = '',
  showOnlyName,
}) => {
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
        <div
          className={`flex flex-col justify-${
            showOnlyName ? 'center' : 'between'
          }`}>
          <Typography weight="bold">{token.name}</Typography>
          {!showOnlyName && (
            <Typography fontVariant="small" color="grey">
              {label} {numberFormatter.format(token.price)}
            </Typography>
          )}
        </div>
      </div>
      <Typography weight="bold">
        {!showOnlyName && priceFormatter.format(token.value)}
      </Typography>
    </div>
  )
}
