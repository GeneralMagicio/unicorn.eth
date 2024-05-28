import {
  Button,
  CheckCircleSVG,
  Modal,
  Spinner,
  Typography,
} from '@ensdomains/thorin'
import { ModalHeader } from '@/components/ModalHeader'
import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { usePOAP } from '@/hooks/usePOAP'
import { UNICORN_MODE } from '@/store/settings'
import { UnicornButton } from '@/components/UnicornButton'
import { brandColor } from '@/lib/client-providers'

const InfoBox = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.space['4'],
  backgroundColor: theme.colors.backgroundSecondary,
  color: theme.colors.textSecondary,
}))

export const ClaimDigitalStickerModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [, setActiveModal] = useAtom(activeModalAtom)
  const { isGettingToken, isMinting, postMint } = usePOAP()

  const titleMap: Record<number, string> = {
    0: '',
    1: 'Mint',
    2: 'Minting',
    3: 'Minted',
  }

  useEffect(() => {
    setStep(0)
  }, [open])

  const goToHistory = () => {
    setActiveModal(null)
    router.push('/dashboard/history')
  }
  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-10 pt-4">
        <ModalHeader title={titleMap[step]} />
        {step === 0 && (
          <>
            <Image
              width={320}
              height={320}
              className="mx-auto h-[320px] w-[320px] rounded-full object-cover"
              src={
                UNICORN_MODE
                  ? '/img/unicorn-black-logo.svg'
                  : '/img/login-bg.png'
              }
              alt="Unicorn"
            />
            <Typography fontVariant="extraLarge" weight="bold">
              Welcome to unicorn.eth
            </Typography>
            <UnicornButton onClick={() => setStep(1)}>Mint</UnicornButton>
          </>
        )}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <InfoBox className="rounded-xl p-4">
              <div className="flex flex-col justify-center gap-2">
                <Typography fontVariant="extraSmall" color="grey">
                  Receive
                </Typography>
                <Typography fontVariant="extraLarge" weight="bold">
                  Welcome to unicorn.eth
                </Typography>
              </div>
              <Image
                width={46}
                height={46}
                className="h-[46px] w-[46px] rounded-full object-cover"
                src={
                  UNICORN_MODE
                    ? '/img/unicorn-black-logo.svg'
                    : '/img/login-bg.png'
                }
                alt="Unicorn"
              />
            </InfoBox>
            <InfoBox className="rounded-lg px-4 py-2">
              <Typography fontVariant="small">Transaction fee</Typography>

              <Typography color="greenPrimary" fontVariant="body">
                Free
              </Typography>
            </InfoBox>
            <div className="flex gap-4 ">
              <Button onClick={() => setStep(0)} colorStyle="greyPrimary">
                Cancel
              </Button>
              <UnicornButton
                onClick={() => {
                  setStep(2)
                  postMint().then(() => setStep(3))
                }}>
                Confirm
              </UnicornButton>
            </div>
          </div>
        )}
        {(step === 2 || step === 3) && (
          <>
            <div className="flex flex-col items-center gap-10">
              {/* {isMinting && } */}
              <Typography color={brandColor}>
                {isMinting ? (
                  <Spinner size="large" color={brandColor} />
                ) : (
                  <CheckCircleSVG width={64} height={64} />
                )}
              </Typography>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Image
                    src={
                      UNICORN_MODE
                        ? '/img/unicorn-black-logo.svg'
                        : '/img/login-bg.png'
                    }
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                    alt="Unicorn"
                  />
                  <Typography fontVariant="extraLarge" weight="bold">
                    Welcome to unicorn.eth
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Typography fontVariant="extraSmall">
                  The transaction is{' '}
                  {isMinting ? 'still pending.' : 'completed.'}
                  <br />
                </Typography>
                <Typography fontVariant="extraSmall">
                  You can check the status on{' '}
                  <Typography
                    className="inline-flex"
                    fontVariant="extraSmall"
                    onClick={goToHistory}
                    color={brandColor}>
                    Transaction History
                  </Typography>
                  .
                </Typography>
              </div>
            </div>
            <UnicornButton onClick={goToHistory}>
              Go to Transaction History
            </UnicornButton>
          </>
        )}
      </div>
    </Modal>
  )
}
