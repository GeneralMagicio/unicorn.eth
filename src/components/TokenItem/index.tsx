import { ICryptoToken } from '@/services/types'
import { numberFormatter, priceFormatter } from '@/utils/price'
import { Typography } from '@ensdomains/thorin'
import Image from 'next/image'
interface TokenItemProps {
  token: ICryptoToken
  amount?: number | bigint
  label?: string
  showOnlyName?: boolean
  showOnlyValue?: boolean
  reverse?: boolean
}

export const TokenItem: React.FC<TokenItemProps> = ({
  token,
  amount,
  label = '',
  showOnlyName,
  showOnlyValue,
  reverse = false,
}) => {
  return (
    <div className={`flex items-center justify-between ${reverse && 'w-full'}`}>
      <div
        className={`flex gap-2 ${
          reverse && 'flex-row-reverse w-[100%] justify-between'
        }`}>
        <Image
          src={token.icon || '/images/ens.png'}
          alt={token.name}
          width={46}
          height={46}
          className="h-[46px] w-[46px] rounded-full"
        />
        <div
          className={`flex flex-col ${
            showOnlyName ? 'justify-center' : 'justify-between'
          }`}>
          <Typography weight="bold">{` ${amount ? amount : ''} ${
            token.name
          }`}</Typography>
          {(!showOnlyName || showOnlyValue) && (
            <Typography fontVariant="small" color="grey">
              {label} {numberFormatter.format(amount || token.value)}
            </Typography>
          )}
        </div>
      </div>
      <Typography weight="bold">
        {!showOnlyName && priceFormatter.format(token.price * token.value)}
      </Typography>
    </div>
  )
}
