import { Modal } from '@ensdomains/thorin'

import { ModalHeader } from '../ModalHeader'

import { useAuth } from '@/hooks/useAuth'

// This is test key, we need to get real one
const ONRAMPER_APIKEY = 'pk_prod_01HETEQF46GSK6BS5JWKDF31BT'

export const BuyModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  {
    const { userAddress } = useAuth()

    const _dismiss = () => {
      onDismiss()
    }

    return (
      <Modal open={open} onDismiss={_dismiss} mobileOnly>
        <div className="flex w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader title={'Buy'} />
          <iframe
            src={`https://buy.onramper.com?apiKey=${ONRAMPER_APIKEY}&mode=buy`}
            title="Onramper Widget"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
          />
        </div>
      </Modal>
    )
  }
}
