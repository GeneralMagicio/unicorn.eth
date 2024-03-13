import { Button, Typography } from '@ensdomains/thorin'
import { CancelButton, FlexRow, Summary } from './send.styles'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { useState } from 'react'
import { TokenItem } from '../TokenItem'
import LoadingArc from './LoadingArc'
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
  const [txComplete, setTxComplete] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const { sendToken } = useSafeAuth()

  const sendTx = async () => {
    // TODO: ADAPT THIS FOR ERC20, sendToken is already apt for it
    setTxLoading(true)
    setTxComplete(false)
    try {
      if (!destination || !amount) return
      const sendSuccess: any = await sendToken(destination, amount) // third param can be ERC20 address
      setTxLoading(false)
      setTxComplete(true)
      if (!!sendSuccess) {
        setSuccessMessage(`Successful tx with hash ${sendSuccess}`)
      }
    } catch (error) {
      // Handle the error here
      console.error(error)
      setTxLoading(false)
    }
  }

  if (txLoading || txComplete) {
    return (
      <div className="flex flex-wrap gap-4 flex-col align-center justify-center text-center gap-x-16">
        <LoadingArc duration={5000} txComplete={txComplete} />
        <Typography fontVariant="headingThree" weight="bold">
          Sending Transaction
        </Typography>
        <Typography className="mt-8 ">
          The transaction is still pending. <br /> You can check the status on
          Transaction History.
        </Typography>
        <Button
          onClick={async () => {
            sendTx()
          }}
          className="btn-primary mt-8">
          Go to Transaction History
        </Button>
      </div>
    )
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
                {truncateEthAddress(destination || 'destination')}
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
      <Summary>
        <div className="flex justify-between">
          <Typography color="text" weight="bold">
            Transaction Fee
          </Typography>
          <Typography color="blue">$1.50 (0.000635 ETH)</Typography>
        </div>
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
