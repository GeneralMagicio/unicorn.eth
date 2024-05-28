import React, { useEffect, useState } from 'react'

import { Modal } from '@ensdomains/thorin'
import { ModalHeader } from '../ModalHeader'
import { SupportedChains } from '@/app/dashboard/data/supported_tokens'
import NetworkTab from '../DepositModal/NetworkTab'
import { defineChain, getChainMetadata } from 'thirdweb/chains'
import { useActiveWallet } from 'thirdweb/react'
import { getSupportedChain } from '@/utils/web3'

export const ChangeNetworkModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const wallet = useActiveWallet()
  const [chainMetadata, setChainMetadata] = useState<any[]>([])

  useEffect(() => {
    const fetchChainMetadata = async () => {
      const metadataPromises = Object.values(SupportedChains).map(
        async (metaChain: any) => {
          const currentChainID = metaChain?.id
          const chain = !!currentChainID && defineChain({ id: currentChainID })
          const chainData = chain && (await getChainMetadata(chain))
          return chainData
        }
      )
      const chainMetadata = await Promise.all(metadataPromises)
      setChainMetadata(chainMetadata)
    }

    fetchChainMetadata()
  }, [])

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex max-h-[80vh] w-full flex-col gap-2 rounded-t-[32px] border-b bg-white p-5 mt-4">
        <ModalHeader title={'Change Network'} />
        <div className="flex flex-col gap-4 overflow-scroll mt-4">
          {chainMetadata.map((chain, index) => (
            <NetworkTab
              key={index}
              isConnected={false}
              chain={chain}
              action={async () => {
                try {
                  await wallet?.switchChain(getSupportedChain(chain.chainId))
                  onDismiss()
                } catch (error) {
                  console.log({ error })
                }
              }}
            />
          ))}
        </div>
      </div>
    </Modal>
  )
}
