import { Button, Typography } from '@ensdomains/thorin'
import { CancelButton, FlexRow, Summary } from './send.styles'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { useState } from 'react'
import { TokenItem } from '../TokenItem'
import Image from 'next/image'
import { truncateEthAddress } from '@/utils/strings'

interface ISendConfirmation {
  destination: string | null
  amount: string | null
  selectedToken: any
  setConfirmTx: (value: boolean) => void
}

const SendConfirmation = ({
  setConfirmTx,
  destination,
  selectedToken,
  amount,
}: ISendConfirmation) => {
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const { sendToken } = useSafeAuth()

  const sendTx = async () => {
    // TODO: ADAPT THIS FOR ERC20, sendToken is already apt for it
    setTxLoading(true)
    if (!destination || !amount) return
    const sendSuccess: any = await sendToken(destination, amount) // third param can be ERC20 address
    setTxLoading(false)
    if (!!sendSuccess) {
      setSuccessMessage(`Successful tx with hash ${sendSuccess}`)
    }
  }

  return (
    <>
      <Summary>
        {selectedToken && (
          <div className="flex flex-col justify-between rounded-2xl px-4 py-2 gap-8">
            <TokenItem
              reverse
              amount={Number(amount)}
              token={selectedToken}
              showOnlyName
            />
            <div className="flex justify-between">
              <Typography weight="bold">
                {truncateEthAddress(destination || '')}
              </Typography>
              <Image
                src={
                  destination
                    ? `https://effigy.im/a/${destination}.svg`
                    : '/img/ens.png'
                }
                alt={'destination'}
                width={46}
                height={46}
                className="h-[46px] w-[46px] rounded-full"
              />
            </div>
          </div>
        )}
      </Summary>
      <FlexRow>
        <CancelButton
          onClick={async () => {
            setConfirmTx(false)
          }}
          className="btn-secondary">
          Cancel
        </CancelButton>
        <Button
          onClick={async () => {
            sendTx()
          }}
          className="btn-primary">
          Confirm
        </Button>
      </FlexRow>
    </>
  )
}

export default SendConfirmation
