import styled, { useTheme } from 'styled-components'
import { Button, Modal, Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'
import { SendIcon } from '../Icons/Send'
import { ReceiveIcon } from '../Icons/Recieve'
import { SwapIcon } from '../Icons/Swap'
import { PlusIcon } from '../Icons/Plus'
import { WithdrawIcon } from '../Icons/Withdraw'
import { ModalHandlIcon } from '../Icons/ModalHandleIcon'
import { useAtom } from 'jotai'
import { activeModalAtom, selectedTokenAtom } from '@/store'
import { IconButton } from '../Styled'

const TransactionItemButton = styled(Button)({
  padding: 0,
  width: '40px',
  height: '40px',
  svg: {
    width: 'unset',
    height: 'unset',
  },
})

export const enum TRANSACTION_ACTION_TYPE {
  SEND = 'SEND',
  RECEIVE = 'RECEIVE',
  SWAP = 'SWAP',
  BUY = 'BUY',
  WITHDRAW = 'WITHDRAW',
}

export const TransactionModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()
  const router = useRouter()
  const [, setActiveModal] = useAtom(activeModalAtom)
  const [, setSelectedToken] = useAtom(selectedTokenAtom)

  const ACTIONS = [
    {
      icon: <SendIcon color={theme.colors.textPrimary} />,
      label: 'Send',
      type: TRANSACTION_ACTION_TYPE.SEND,
    },
    {
      icon: <ReceiveIcon />,
      label: 'Receive',
      type: TRANSACTION_ACTION_TYPE.RECEIVE,
    },
    {
      icon: <SwapIcon color={theme.colors.textPrimary} />,
      label: 'Swap',
      type: TRANSACTION_ACTION_TYPE.SWAP,
    },
    {
      icon: <PlusIcon color={theme.colors.textPrimary} />,
      label: 'Buy',
      type: TRANSACTION_ACTION_TYPE.BUY,
    },
    {
      icon: <WithdrawIcon />,
      label: 'Witdraw to exchange',
      type: TRANSACTION_ACTION_TYPE.WITHDRAW,
    },
  ]
  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <header className="flex justify-center text-center">
          <ModalHandlIcon />
        </header>
        <div className="flex flex-col gap-6">
          {ACTIONS.map((action) => (
            <div
              className="flex items-center gap-4"
              key={action.type}
              onClick={() => {
                switch (action.type) {
                  case TRANSACTION_ACTION_TYPE.SEND:
                    setSelectedToken(null)
                  default:
                    setActiveModal(action.type)
                }
              }}>
              <IconButton
                colorStyle="greySecondary"
                shape="circle"
                height="40px">
                {action.icon}
              </IconButton>
              <Typography weight="bold">{action.label}</Typography>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
