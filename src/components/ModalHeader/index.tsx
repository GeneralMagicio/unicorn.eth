import { Typography } from '@ensdomains/thorin'
import { ModalHandlIcon } from '../Icons/ModalHandleIcon'

export const ModalHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="flex flex-col gap-2 items-center justify-center text-center">
      <ModalHandlIcon />
      <Typography fontVariant="large" weight="bold">
        {title}
      </Typography>
    </header>
  )
}
