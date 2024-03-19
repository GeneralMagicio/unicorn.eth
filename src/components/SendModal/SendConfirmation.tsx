import { Button, Typography } from '@ensdomains/thorin'
import { CancelButton, FlexRow, Summary } from './send.styles'
import { useRouter } from 'next/navigation'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { useEffect, useState } from 'react'
import { TokenItem } from '../TokenItem'
import LoadingArc from './LoadingArc'
import Image from 'next/image'
import { truncateEthAddress } from '@/utils/strings'

interface ISendConfirmation {
  destination: string | null
  amount: string | null
  selectedToken: any
  onDismiss: () => void
  setConfirmTx: (value: boolean) => void
  setTxDone: (value: boolean) => void
}

const SendConfirmation = ({
  onDismiss,
  setConfirmTx,
  setTxDone,
  destination,
  selectedToken,
  amount,
}: ISendConfirmation) => {
  const router = useRouter()
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txComplete, setTxComplete] = useState(false)
  const [txFailed, setTxFailed] = useState(false)
  const [gasCost, setGasCost] = useState<string | null>('')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const { sendToken, estimateGasFee } = useSafeAuth()

  const sendTx = async () => {
    setTxLoading(true)
    setTxComplete(false)
    try {
      if (!destination || !amount) return
      const sendSuccess: any = await sendToken(
        destination,
        amount,
        selectedToken?.address // if empty it assumes ETH
      )
      setTxLoading(false)
      setTxComplete(true)
      if (!!sendSuccess) {
        setSuccessMessage(`Successful tx with hash ${sendSuccess}`)
        setTxDone(true)
      } else {
        setTxFailed(true)
      }
    } catch (error) {
      // Handle the error here
      console.error(error)
      setTxFailed(true)
      setTxLoading(false)
    }
  }

  useEffect(() => {
    const getGas = async () => {
      if (!destination || !amount) return
      const gas = await estimateGasFee(
        destination,
        amount,
        selectedToken?.address
      )
      gas && setGasCost(gas)
    }
    getGas()
  }, [])

  if (txFailed) {
    return (
      <div className="flex flex-wrap gap-4 flex-col align-center justify-center text-center gap-x-16">
        <Typography fontVariant="headingThree" weight="bold">
          Transaction Failed
        </Typography>

        <Button
          onClick={async () => {
            await sendTx()
          }}
          className="btn-primary mt-8">
          Try again
        </Button>
      </div>
    )
  }

  if (txLoading || txComplete) {
    return (
      <div className="flex flex-wrap gap-4 flex-col align-center justify-center text-center gap-x-16">
        <LoadingArc duration={5000} txComplete={txComplete} />
        {!txComplete && (
          <Typography fontVariant="headingThree" weight="bold">
            Sending Transaction
          </Typography>
        )}
        {txComplete && (
          <div className="flex flex-col w-[250px] items-center self-center mt-2 gap-2 align-center justify-center text-center">
            <div className="flex flex-row gap-2 items-center content-center align-center text-center">
              <Image
                width={24}
                height={24}
                className="h-[24px] w-[24px] rounded-full"
                src={selectedToken?.icon}
                alt="token icon"
              />
              <Typography weight="bold">
                {amount} {selectedToken?.symbol}
              </Typography>
            </div>
            <Image
              width={14}
              height={14}
              src="/img/double-arrow-down.svg"
              alt="arrow"
            />
            <div className="flex flex-row gap-2 items-center content-center align-center text-center">
              <Image
                width={24}
                height={24}
                className="h-[24px] w-[24px] rounded-full"
                src={
                  destination
                    ? `https://effigy.im/a/${destination}.svg`
                    : '/img/ens.png'
                }
                alt="token icon"
              />
              <Typography weight="bold">
                {truncateEthAddress(destination || '')} {selectedToken?.symbol}
              </Typography>
            </div>
          </div>
        )}
        <Typography className="mt-4 w-[100%]">
          <span className=" text-sm">
            The transaction {txComplete ? 'completed' : 'is still pending'}.{' '}
          </span>
          <br />
          <div className="flex flex-row mt-2 w-[100%] gap-1 text-sm text-center justify-center">
            {' '}
            You can check the status on
            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                router.push('/dashboard/history')
                onDismiss()
              }}>
              {' '}
              Transaction History.
            </p>
          </div>
        </Typography>
        <Button
          onClick={async () => {
            router.push(txComplete ? '/dashboard' : '/dashboard/history')
            onDismiss()
          }}
          className="btn-primary mt-8">
          {txComplete ? 'Done' : 'Go to Transaction History'}
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
              amount={Number(amount) || 1}
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
      <Summary>
        <div className="flex justify-between">
          <Typography color="text" weight="bold">
            Transaction Fee
          </Typography>
          {gasCost && <Typography color="blue">{`${gasCost} ETH`}</Typography>}
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
            await sendTx()
          }}
          className="btn-primary">
          Confirm
        </Button>
      </FlexRow>
    </>
  )
}

export default SendConfirmation
