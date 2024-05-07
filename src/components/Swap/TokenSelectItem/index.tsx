import { ChevronRight } from '@/components/Icons/ChevronRight'
import { ICryptoToken } from '@/services/types'
import { numberFormatter, priceFormatter } from '@/utils/price'
import { Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import styled from 'styled-components'
interface TokenItemProps {
  token: ICryptoToken
  showOnlyName?: boolean
  handleClick?: () => void
  handleMaxClick?: () => void
  showMax?: boolean
}

const MaxBtn = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.colors.blueLight,
}))

export const TokenSelectItem: React.FC<TokenItemProps> = ({
  token,
  showOnlyName,
  handleClick = () => {},
  handleMaxClick,
  showMax = true,
}) => {
  return (
    <div className={`flex w-full items-center justify-between`}>
      <div
        className="flex w-full gap-2"
        onClick={showMax ? undefined : handleClick}>
        <Image
          src={token.icon || '/images/ens.png'}
          alt={token.name}
          width={46}
          height={46}
          className="h-[46px] w-[46px] rounded-full"
        />
        <div
          className={`my-0.5 flex w-full flex-col   ${
            showOnlyName ? 'justify-center' : 'justify-between'
          }`}>
          <div className="flex">
            <Typography
              className="w-20 truncate"
              weight="bold"
              onClick={handleClick}>
              {token.name}
            </Typography>
            {!showOnlyName && (
              <ChevronRight className="-mt-0.5 shrink-0 rotate-90" />
            )}
          </div>
          {!showOnlyName ? (
            <div className="flex  items-center justify-between gap-1">
              <Typography
                className=" whitespace-nowrap"
                fontVariant="extraSmall"
                color="grey">
                {numberFormatter.format(token.value)}
              </Typography>
              {showMax && (
                <MaxBtn
                  role="button"
                  onClick={handleMaxClick}
                  fontVariant="extraSmall"
                  color="blueDim"
                  className="rounded-[200px] px-2 py-0.5">
                  Max
                </MaxBtn>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
