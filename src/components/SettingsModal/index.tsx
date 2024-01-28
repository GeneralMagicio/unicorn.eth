import { useSafeAuth } from '@/hooks/useSafeAuth'
import { AccountIcon } from '@/components/Icons/Account'
import { AlertIcon } from '@/components/Icons/Alert'
import { ChatIcon } from '@/components/Icons/Chat'
import { LockIcon } from '@/components/Icons/Lock'
import { LogOutIcon } from '@/components/Icons/LogOut'
import { SettingsIcon } from '@/components/Icons/Settings'
import { Modal, Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'
import { ModalHeader } from '../ModalHeader'

export const enum SETTINGS_ACTION_TYPE {
  DETAILS,
  SECURITY,
  GENERAL,
  HELP,
  ABOUT,
  LOGOUT,
}
const SETTINGS_ACTIONS = [
  {
    icon: <AccountIcon />,
    label: 'Account Details',
    type: SETTINGS_ACTION_TYPE.DETAILS,
  },
  {
    icon: <LockIcon />,
    label: 'Security',
    type: SETTINGS_ACTION_TYPE.SECURITY,
  },
  {
    icon: <SettingsIcon />,
    label: 'General Settings',
    type: SETTINGS_ACTION_TYPE.GENERAL,
  },
  {
    icon: <ChatIcon />,
    label: 'Help & Support',
    type: SETTINGS_ACTION_TYPE.HELP,
  },
  { icon: <AlertIcon />, label: 'About us', type: SETTINGS_ACTION_TYPE.ABOUT },
  { icon: <LogOutIcon />, label: 'Log out', type: SETTINGS_ACTION_TYPE.LOGOUT },
]

export const SettingsModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const router = useRouter()
  const {
    safeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setUserInfo,
    setSafeAuthSignInInfo,
  } = useSafeAuth()
  const handleActionClick = (action: (typeof SETTINGS_ACTIONS)[number]) => {
    switch (action.type) {
      case SETTINGS_ACTION_TYPE.LOGOUT:
        logout()
        router.replace('/login')
        break
      default:
    }
  }
  const logout = async () => {
    if (isAuthenticated) {
      await safeAuthPack?.signOut()
      setSafeAuthSignInInfo(null)
      setIsAuthenticated(false)
      setUserInfo(null)
    }
  }
  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-6 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Settings" />
        {/* <hr /> */}
        {SETTINGS_ACTIONS.map((action) => (
          <div
            className="flex items-center gap-4"
            key={action.type}
            onClick={() => handleActionClick(action)}>
            {action.icon}
            <Typography weight="bold">{action.label}</Typography>
          </div>
        ))}
      </div>
    </Modal>
  )
}
