import React, { FC, useState } from 'react'
import { CrossIcon } from '../Icons/Cross'
import Image from 'next/image'
import { DotStepper } from './DotStepper'
import { Typography } from '@ensdomains/thorin'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { MODAL_TYPE } from '@/app/dashboard/layout'

type MessageBoxProps = {
  title: string
  subtitle: string
  onClose: () => void
}

export const PromotionBox: FC<MessageBoxProps> = ({
  title,
  subtitle,
  onClose,
}) => {
  const [step, setStep] = useState(1)
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f4f4f4] p-4">
      <div className="flex justify-between space-x-2">
        <DotStepper
          activeStep={step}
          steps={3}
          changeStep={(step) => {
            setStep(step)
          }}
        />
        <div className="cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>
      </div>
      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={() => setActiveModal(MODAL_TYPE.CLAIM_DIGITAL_STICKER)}>
        <span className="rounded-full bg-blue-500 p-1">
          <Image src={'/img/poap1.png'} alt="poap" width={40} height={40} />
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
    </div>
  )
}
