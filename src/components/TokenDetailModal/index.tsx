import styled from 'styled-components'
import { Button, Modal, Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ModalHandlIcon } from '../Icons/ModalHandleIcon'
import { MODAL_TYPE } from '@/app/dashboard/layout'
import { BalanceBox } from '../Styled'
import { useAtom } from 'jotai'
import { activeModalAtom, selectedTokenAtom } from '@/store'
import { numberFormatter, priceFormatter } from '@/utils/price'
import { ChevronRight } from '../Icons/ChevronRight'
import { SendIcon } from '../Icons/Send'
import { PlusIcon } from '../Icons/Plus'
import { SwapIcon } from '../Icons/Swap'

const createRandomHistoryArray = () => {
  const allowedStrings = ['Buy', 'Swapped', 'Received']
  const arrayLength = Math.floor(Math.random() * 5) + 1 // Random length between 1 and 5
  const resultArray = Array.from({ length: arrayLength }, () => {
    const randomIndex = Math.floor(Math.random() * allowedStrings.length)
    return allowedStrings[randomIndex]
  })

  return resultArray
}

export const TokenDetailModal: React.FC = () => {
  const router = useRouter()
  const [token] = useAtom(selectedTokenAtom)
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  const [, setSelectedToken] = useAtom(selectedTokenAtom)

  return (
    <Modal
      open={activeModal === MODAL_TYPE.TOKEN_DETAIL}
      onDismiss={() => {
        setActiveModal(null)
        setSelectedToken(null)
      }}
      mobileOnly>
      <div className="flex min-h-[40%] max-h-[90vh] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4 overflow-scroll">
        <header className="flex justify-center text-center">
          <ModalHandlIcon />
        </header>
        {token && (
          <div className="flex flex-col gap-6">
            <BalanceBox>
              <div className="flex gap-2">
                <Image
                  src={token.icon || '/images/ens.png'}
                  alt={token.name}
                  width={46}
                  height={46}
                  className="rounded-full"
                />
                <div className={`flex flex-col justify-center`}>
                  <Typography weight="bold">{token.name}</Typography>
                </div>
              </div>
              <Typography
                color="text"
                fontVariant="extraLarge"
                weight="extraBold">
                {numberFormatter.format(token.value)} {token.symbol}
              </Typography>
              <Typography color="inherit" fontVariant="small">
                {priceFormatter.format(token.price * token.value)}
              </Typography>
            </BalanceBox>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <Typography weight="bold">History</Typography>
                <div role="button" className="flex items-center gap-2">
                  <Typography fontVariant="small" color="textSecondary">
                    View more
                  </Typography>
                  <ChevronRight />
                </div>
              </div>
              {createRandomHistoryArray().map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <div className="flex flex-col">
                    <Typography weight="bold">{item}</Typography>
                    <Typography fontVariant="small" color="textSecondary">
                      Dec 25, 2023
                    </Typography>
                  </div>
                  <div className="flex flex-col  items-end">
                    <Typography weight="bold">
                      +{numberFormatter.format(0.1)} {token.name}
                    </Typography>
                    <Typography fontVariant="small" color="textSecondary">
                      {priceFormatter.format(223.39)}
                    </Typography>
                  </div>
                </div>
              ))}
              <hr />
              <Typography weight="bold">About ${token?.name}</Typography>
              <Typography fontVariant="small">
                Ethereum is a global, open-source platform for decentralized
                applications. In other words, the vision is to create a world
                computer that anyone can build applications in a decentralized
                manner; while all states and data are distributed and publicly
                accessible.
              </Typography>
              <div role="button" className="flex items-center gap-2">
                <Typography fontVariant="small" color="textSecondary">
                  Read more
                </Typography>
                <ChevronRight />
              </div>
            </div>

            <div className="flex gap-4 justify-between">
              <Button
                size="small"
                prefix={<SendIcon color="currentColor" />}
                onClick={() => setActiveModal(MODAL_TYPE.SEND)}>
                Send
              </Button>
              <Button size="small" prefix={<PlusIcon color="currentColor" />}>
                Buy
              </Button>
              <Button size="small" prefix={<SwapIcon color="currentColor" />}>
                Swap
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
