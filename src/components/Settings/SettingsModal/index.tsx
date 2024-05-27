import { AccountIcon } from '@/components/Icons/Account'
import { AlertIcon } from '@/components/Icons/Alert'
import { ChatIcon } from '@/components/Icons/Chat'
import { LockIcon } from '@/components/Icons/Lock'
import { LogOutIcon } from '@/components/Icons/LogOut'
import { SettingsIcon } from '@/components/Icons/Settings'
import { Button, Modal, Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'
import { useTheme } from 'styled-components'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { MODAL_TYPE } from '@/utils/modals'

import { ModalHeader } from '@/components/ModalHeader'
import { IconButton } from '@/components/Styled'
import { useActiveWallet, useDisconnect } from 'thirdweb/react'
import { useAuth } from '@/hooks/useAuth'
import { LAST_CONNECT_PERSONAL_WALLET_ID } from '@/lib/third-web/constants'
import { UNICORN_MODE } from '@/store/settings'
import { UnicornButton } from '@/components/UnicornButton'

export const enum SETTINGS_ACTION_TYPE {
  DETAILS,
  SECURITY,
  GENERAL,
  HELP,
  ABOUT,
  LOGOUT,
}

export const SettingsModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()
  const router = useRouter()
  const { clearUserInfo } = useAuth()
  const { disconnect } = useDisconnect()
  const wallet = useActiveWallet()

  const [, setActiveModal] = useAtom(activeModalAtom)

  const handleActionClick = (action: (typeof SETTINGS_ACTIONS)[number]) => {
    switch (action.type) {
      case SETTINGS_ACTION_TYPE.LOGOUT:
        logout()
        router.replace('/login')
        break
      case SETTINGS_ACTION_TYPE.GENERAL:
        setActiveModal(MODAL_TYPE.SETTINGS_GENERAL)
        break
      case SETTINGS_ACTION_TYPE.DETAILS:
        setActiveModal(MODAL_TYPE.SETTINGS_ACCOUNT_DETAILS)
      default:
    }
  }
  const logout = async () => {
    if (wallet) {
      disconnect(wallet)
      setActiveModal(null)
      clearUserInfo()
      localStorage.removeItem(LAST_CONNECT_PERSONAL_WALLET_ID)
    }
  }

  const SETTINGS_ACTIONS = [
    {
      icon: <AccountIcon />,
      label: 'Account Details',
      type: SETTINGS_ACTION_TYPE.DETAILS,
    },
    {
      icon: <SettingsIcon color={theme.colors.textPrimary} />,
      label: 'General',
      type: SETTINGS_ACTION_TYPE.GENERAL,
    },

    {
      icon: <AlertIcon />,
      label: 'About us',
      type: SETTINGS_ACTION_TYPE.ABOUT,
    },
    {
      icon: <LockIcon />,
      label: 'Security',
      type: SETTINGS_ACTION_TYPE.SECURITY,
    },
    {
      icon: <ChatIcon />,
      label: 'Help & Support',
      type: SETTINGS_ACTION_TYPE.HELP,
    },

    {
      icon: <LogOutIcon />,
      label: 'Log out',
      type: SETTINGS_ACTION_TYPE.LOGOUT,
    },
  ]
  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-6 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Settings" />
        {SETTINGS_ACTIONS.map((action) => (
          <div
            className="flex items-center gap-4"
            key={action.type}
            onClick={() => handleActionClick(action)}>
            <IconButton
              colorStyle={
                action.type === SETTINGS_ACTION_TYPE.LOGOUT
                  ? 'redSecondary'
                  : 'greySecondary'
              }
              shape="circle"
              height="40px">
              {action.icon}
            </IconButton>
            <Typography weight="bold">{action.label}</Typography>
          </div>
        ))}
        <div className="flex justify-between gap-4">
          <Button
            size="small"
            colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
            shape="rounded">
            Follow on X
          </Button>
          <Button colorStyle="greySecondary" size="small" shape="rounded">
            Visit Website
          </Button>
        </div>
      </div>
    </Modal>
  )
}
