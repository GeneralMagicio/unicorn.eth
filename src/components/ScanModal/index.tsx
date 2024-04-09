import { Modal } from '@ensdomains/thorin'
import { ModalHeader } from '../ModalHeader'
import { Scanner } from '@yudiel/react-qr-scanner'

export const ScanModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title={''} />
        <Scanner onResult={(result: any) => console.log({ result })} />
      </div>
    </Modal>
  )
}
