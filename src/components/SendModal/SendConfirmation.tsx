import { Button, Typography } from '@ensdomains/thorin'
import { CancelButton, FlexRow, Summary } from './send.styles'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TokenItem } from '../TokenItem'
import LoadingArc from './LoadingArc'
import Image from 'next/image'
import { truncateEthAddress } from '@/utils/strings'
import { ICryptoToken } from '@/services/types'
import {
  getContract,
  prepareContractCall,
  prepareTransaction,
  sendAndConfirmTransaction,
  simulateTransaction,
  toWei,
} from 'thirdweb'
import { client } from '@/lib/third-web/provider'
import { erc20Abi } from 'viem'
import {
  SupportedToken,
  supportedTokens,
} from '@/app/dashboard/data/supported_tokens'
import { useActiveAccount, useEstimateGasCost } from 'thirdweb/react'
import { activeChainId } from '@/lib/third-web/constants'
import { getSupportedChain } from '@/utils/web3'

interface ISendConfirmation {
  destination: string | null
  amount: string | null
  selectedToken: ICryptoToken | null
  onDismiss: () => void
  setConfirmTx: (value: boolean) => void
  setTxDone: (value: boolean) => void
}

enum TxState {
  Initial,
  Loading,
  Complete,
  Failed,
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
  const account = useActiveAccount()
  const { mutate: estimateGasCost, data: gasEstimate } = useEstimateGasCost()
  const [txState, setTxState] = useState<TxState>(TxState.Initial)
  // TODO: right now sepolia, please make it dynamic according to the token
  const chainId = activeChainId
  const supportedToken = supportedTokens.find(
    (token: SupportedToken) => token.symbol === selectedToken?.symbol
  )

  const _selectedToken = supportedToken?.addresses.find(
    (i) => i.chainId === chainId
  ) as any

  const selectedTokenAddress = _selectedToken?.address
  const selectedTokenABI = _selectedToken?.abi
  const isNativeToken = _selectedToken?.address === ''
  const contract = getContract({
    client,
    chain: getSupportedChain(chainId),
    address: selectedTokenAddress,
    abi: selectedTokenABI || erc20Abi,
  })
  const isValidTx = !!destination && !!amount && !!contract
  const tx = isValidTx
    ? isNativeToken
      ? prepareTransaction({
          to: destination,
          chain: getSupportedChain(chainId),
          client: client,
          value: toWei(amount),
        })
      : prepareContractCall({
          contract,
          method: 'transfer',
          params: [destination, toWei(amount)],
          value: BigInt(0),
        })
    : null

  const sendTx = async () => {
    if (!destination || !amount || !tx || !account) {
      return setTxState(TxState.Failed)
    }
    setTxState(TxState.Loading)
    try {
      const simulation = await simulateTransaction({ transaction: tx, account })
      if (!simulation) {
        return setTxState(TxState.Failed)
      }
      const sendSuccess = await sendAndConfirmTransaction({
        transaction: tx,
        account,
      })
      setTxState(TxState.Complete)
      if (!!sendSuccess) {
        setTxDone(true)
      } else {
        setTxState(TxState.Failed)
      }
    } catch (error) {
      // Handle the error here
      console.error(error)
      setTxState(TxState.Failed)
    }
  }
  console.log({ tx })
  useEffect(() => {
    const getGas = async () => {
      try {
        if (!tx) return
        if (!account) return
        estimateGasCost(tx)
      } catch (error) {
        console.error(error)
      }
    }
    getGas()
  }, [])

  if (txState === TxState.Failed) {
    return (
      <div className="flex flex-wrap gap-4 flex-col align-center justify-center text-center gap-x-16">
        <Typography fontVariant="headingThree" weight="bold">
          Transaction Failed
        </Typography>

        <Button onClick={sendTx} className="btn-primary mt-8">
          Try again
        </Button>
      </div>
    )
  }
  const txLoading = txState === TxState.Loading
  const txComplete = txState === TxState.Complete

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
                src={selectedToken?.icon!}
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
            <div className="flex flex-row items-center text-center justify-between">
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
          {gasEstimate && (
            <Typography color="blue">{`${Number(gasEstimate?.ether).toFixed(
              6
            )} ETH`}</Typography>
          )}
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
        <Button onClick={sendTx} className="btn-primary">
          Confirm
        </Button>
      </FlexRow>
    </>
  )
}

export default SendConfirmation
