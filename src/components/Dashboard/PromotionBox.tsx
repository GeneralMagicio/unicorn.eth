import React, { FC, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CrossIcon } from '../Icons/Cross'
import Image from 'next/image'
import { DotStepper } from './DotStepper'
import { Typography } from '@ensdomains/thorin'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { MODAL_TYPE } from '@/utils/modals'
import { UNICORN_MODE } from '@/store/settings'

type MessageBoxProps = {
  title: string
  subtitle: string
  onClose: () => void
}

const numberOfSteps = 3

export const PromotionBox: FC<MessageBoxProps> = ({
  title,
  subtitle,
  onClose,
}) => {
  const [step, setStep] = useState(1)
  const [_, setActiveModal] = useAtom(activeModalAtom)

  const goToNextStep = () => {
    setStep(Math.min(step + 1, 3))
  }

  const goToPreviousStep = () => {
    setStep(Math.max(step - 1, 1))
  }

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => goToNextStep(),
    onSwipedRight: (eventData) => goToPreviousStep(),
    // ...config,
  })

  return (
    <div
      {...handlers}
      className="flex w-full flex-col gap-4 rounded-lg bg-background-secondary p-4">
      <div className="flex justify-between space-x-2">
        <DotStepper
          activeStep={step}
          steps={numberOfSteps}
          changeStep={(step) => {
            setStep(step)
          }}
        />
        <div className="cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>
      </div>
      {step === 1 && (
        <div
          className="flex cursor-pointer items-center gap-4"
          onClick={() => setActiveModal(MODAL_TYPE.CLAIM_DIGITAL_STICKER)}>
          <span className="rounded-full  p-1">
            <Image
              src={UNICORN_MODE ? '/img/poap1.svg' : '/img/poap1.png'}
              alt="poap"
              width={40}
              height={40}
            />
          </span>
          <div className="flex flex-col gap-1">
            <Typography
              fontVariant="large"
              weight="extraBold"
              className="text-gray-800">
              {title}
            </Typography>
            <Typography
              fontVariant="small"
              color="textSecondary"
              className="text-gray-600">
              {subtitle}
            </Typography>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex cursor-pointer items-center gap-4">
          <span className="rounded-full p-1">
            <Image src={'/img/eth.png'} alt="poap" width={40} height={40} />
          </span>
          <div className="flex flex-col gap-1">
            <Typography
              fontVariant="large"
              weight="extraBold"
              className="text-gray-800">
              {'Test'}
            </Typography>
            <Typography
              fontVariant="small"
              color="textSecondary"
              className="text-gray-600">
              {'This is a test subtitle'}
            </Typography>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="flex cursor-pointer items-center gap-4">
          <span className="rounded-full p-1">
            <Image src={'/img/ens.png'} alt="poap" width={40} height={40} />
          </span>
          <div className="flex flex-col gap-1">
            <Typography
              fontVariant="large"
              weight="extraBold"
              className="text-gray-800">
              {'Another test'}
            </Typography>
            <Typography
              fontVariant="small"
              color="textSecondary"
              className="text-gray-600">
              {'Another subtitle'}
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}
