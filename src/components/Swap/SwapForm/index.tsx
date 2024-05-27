import React from 'react'
import cn from 'classnames'
import { PlusIcon } from '@/components/Icons/Plus'
import { SwapVerticalIcon } from '@/components/Icons/SwapVertical'
import { priceFormatter } from '@/utils/price'
import { Typography, Button } from '@ensdomains/thorin'
import styled from 'styled-components'
import { TokenSelectItem } from '../TokenSelectItem'
import { useSwapContext } from '../swap-context'
import { ICryptoToken } from '@/services/types'
import { activeModalAtom } from '@/store'
import { useAtom } from 'jotai'
import { MODAL_TYPE } from '@/utils/modals'
import { UNICORN_MODE } from '@/store/settings'
import { UnicornButton } from '@/components/UnicornButton'

const InfoBox = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.space['3'],
  borderRadius: '16px',
  backgroundColor: theme.colors.backgroundSecondary,
  color: theme.colors.textSecondary,
  padding: '16px',
}))

export const SwapForm = () => {
  const [, setActiveModal] = useAtom(activeModalAtom)
  const {
    isAllSelected,
    selectedTokens,
    setSelectedTokens,
    destinationToken,
    selectedCount,
    setStep,
  } = useSwapContext()

  const handleChangeTokenAmount = (token: ICryptoToken, amount: number) => {
    setSelectedTokens({
      ...selectedTokens,
      [token.name]: {
        ...token,
        amount,
      },
    })
  }
  return (
    <>
      <>
        <div className="flex flex-col gap-4">
          {isAllSelected ? (
            <Typography fontVariant="extraLarge">
              Select destination token
            </Typography>
          ) : (
            <Typography color="text" fontVariant="body">
              You can add upto 3 tokens for multi token swap
            </Typography>
          )}
          <InfoBox className="flex-col">
            {/* TODO: remove true  */}
            {(!isAllSelected || true) &&
              Object.values(selectedTokens).map((token, idx) => (
                <React.Fragment key={token.name}>
                  <div className="flex items-center gap-4">
                    <div className="flex w-36 flex-col">
                      <input
                        className={cn('bg-transparent', {
                          'text-black': token.amount,
                        })}
                        value={token.amount || 0}
                        placeholder="Amount"
                        onChange={(e) =>
                          handleChangeTokenAmount(token, Number(e.target.value))
                        }
                      />
                      <Typography fontVariant="label" color="inherit">
                        (
                        {priceFormatter.format(
                          (token.amount || 0) * (token.price || 0)
                        )}
                        )
                      </Typography>
                    </div>
                    <TokenSelectItem
                      token={token}
                      handleClick={() => setStep(0)}
                      handleMaxClick={() =>
                        handleChangeTokenAmount(token, token.value)
                      }
                    />
                  </div>
                  {idx !== selectedCount - 1 ? (
                    <PlusIcon color="currentColor" className="mx-auto" />
                  ) : (
                    <SwapVerticalIcon
                      color="currentColor"
                      className="mx-auto"
                    />
                  )}
                </React.Fragment>
              ))}

            <div className="flex items-center gap-4">
              <div className="flex w-36 flex-col">
                <input
                  className={cn('bg-transparent', {
                    'text-black': destinationToken.value,
                  })}
                  value={destinationToken.value || 0}
                  disabled
                  placeholder="Amount"
                />
                <Typography fontVariant="label" color="inherit">
                  (
                  {priceFormatter.format(
                    (destinationToken.value || 0) *
                      (destinationToken.price || 0)
                  )}
                  )
                </Typography>
              </div>
              <TokenSelectItem
                token={destinationToken}
                handleClick={() =>
                  setActiveModal(MODAL_TYPE.SWAP_SELECT_TOKENS)
                }
                showMax={false}
              />
            </div>
            <hr />
            <div className="flex flex-col">
              <Typography fontVariant="small">Recieve (inc. fee)</Typography>
              <div className="flex gap-1">
                <Typography color="inherit" fontVariant="extraLarge">
                  0.0
                </Typography>
                <Typography fontVariant="extraLarge">
                  {destinationToken.name}
                </Typography>
              </div>
              <Typography color="inherit" fontVariant="extraSmall">
                (${destinationToken.price})
              </Typography>
            </div>
          </InfoBox>
          <InfoBox className="justify-between !rounded-lg !py-2 px-4">
            <Typography fontVariant="small">Transaction fee</Typography>

            <Typography color="blueDim" fontVariant="small" weight="normal">
              10.46 USDT ($10.50)
            </Typography>
          </InfoBox>
        </div>
        <div className="flex gap-4">
          <Button colorStyle="greyPrimary" onClick={() => setStep(0)}>
            Cancel
          </Button>
          <UnicornButton
            disabled={!Boolean(Object.keys(selectedTokens).length)}
            onClick={() => setStep(2)}>
            Confirm
          </UnicornButton>
        </div>
      </>
    </>
  )
}
