import { useState } from 'react'
import { Modal, Typography } from '@ensdomains/thorin'

import { ModalHeader } from '../ModalHeader'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { QRView } from './QRView'
import { QRBlack } from '../Icons/QRBlack'
import { CopyBlack } from '../Icons/CopyBlack'
import CopyWrapper from './CopyWrapper'

export const ReceiveModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  {
    const [openQR, setOpenQR] = useState(false)
    const { userName, userAddress } = useSafeAuth()
    const suffix = '.account.eth'
    const account = `${userName}${suffix}`

    return (
      <Modal open={open} onDismiss={onDismiss} mobileOnly>
        <QRView
          open={openQR}
          onDismiss={() => setOpenQR(false)}
          userAddress={userAddress}
          userName={account}
        />
        <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
          <ModalHeader title={'Receive'} />
          <Typography color="text" weight="bold">
            Receive assets by sharing either your domain or a link to your
            wallet.
          </Typography>
          <div className="flex flex-col gap-4">
            <div
              onClick={() => setOpenQR(true)}
              className="flex flex-row w-full min-h-[71px] border-[1px] border-solid border-[rgba(232, 232, 232, 1)] rounded-xl p-4 gap-2 justify-between items-center">
              <div className="flex flex-col gap-2">
                <Typography color="text" weight="bold" fontVariant="body">
                  Web QR
                </Typography>
                <Typography color="textSecondary" fontVariant="extraSmall">
                  Share the link to your wallet as a QR Code
                </Typography>
              </div>
              <QRBlack />
            </div>
            <CopyWrapper textToCopy={account} absolute>
              <div className="flex flex-row w-full min-h-[71px] border-[1px] border-solid border-[rgba(232, 232, 232, 1)] rounded-xl p-4 gap-2 justify-between items-center">
                <Typography color="text" weight="bold" fontVariant="body">
                  {account}
                </Typography>
                <CopyBlack />
              </div>
            </CopyWrapper>
            <div className="flex flex-col w-full min-h-[71px] border-[1px] border-solid border-[rgba(232, 232, 232, 1)] rounded-xl p-4 gap-2  justify-center">
              <Typography
                weight="bold"
                fontVariant="body"
                style={{
                  color: 'rgba(182, 182, 191, 1)',
                }}>
                Advanced View
              </Typography>
              <Typography
                fontVariant="extraSmall"
                style={{
                  color: 'rgba(182, 182, 191, 1)',
                }}>
                Show 0x address on various networks
              </Typography>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}
