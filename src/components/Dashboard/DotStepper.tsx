import { UNICORN_MODE } from '@/store/settings'

interface Props {
  activeStep: number
  steps: number
  changeStep: (step: number) => void
}

export const DotStepper: React.FC<Props> = ({
  activeStep,
  steps,
  changeStep,
}) => {
  const colorClassName = UNICORN_MODE ? 'bg-accent' : 'bg-blue-500'
  return (
    <div className="flex gap-2">
      {Array(steps)
        .fill(0)
        .map((_, step) => (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <div
            className={`h-3 w-3 cursor-pointer rounded-full ${
              step + 1 === activeStep ? colorClassName : `bg-[#fff]`
            }`}
            key={step}
            onClick={() => changeStep(step + 1)}
          />
        ))}
    </div>
  )
}
