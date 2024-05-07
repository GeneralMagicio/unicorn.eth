import { Button, Input, Modal, Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { ModalHeader } from '@/components/ModalHeader'
import { UserNameInput } from '@/components/Styled'
import { useAuth } from '@/hooks/useAuth'
import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useEffect, useState } from 'react'
import { TickCircleIcon } from '@/components/Icons/TickCircle'

export const ChangeDomainModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()
  const { setUsername, username, setUserProfilePicture } = useAuth()
  const [newUserName, setNewUserName] = useState('')
  const [changed, setChanged] = useState(false)
  const {
    isRegistering,
    isNameAvailable,
    setIsNameAvailable,
    debouncedCheckUserName,
    createEnsSubname,
  } = useEnsResolver()

  useEffect(() => {
    setChanged(false)
    setNewUserName('')
  }, [open])

  const updateUserName = () => {
    createEnsSubname(newUserName)
      .then(() => {
        setChanged(true)
        setUsername(newUserName.toLowerCase())
      })
      .then(() => {
        setUserProfilePicture('')
      })
  }

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Change Domain" />
        {changed ? (
          <div className="flex flex-col items-center gap-1">
            <TickCircleIcon
              color={theme.colors.bluePrimary}
              width={100}
              height={100}
              strokeWidth={0.5}
            />
            <Typography fontVariant="small">Wallet domain updated!</Typography>
            <Button
              className="mt-9"
              onClick={() => {
                setChanged(false)
                onDismiss()
              }}>
              Back to Account Details
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <Typography fontVariant="extraLarge">
              Choose your wallet domain.
            </Typography>
            <UserNameInput
              varient={
                newUserName && isNameAvailable === false
                  ? 'error'
                  : newUserName && isNameAvailable === true
                    ? 'success'
                    : undefined
              }>
              <Input
                description={
                  newUserName && isNameAvailable
                    ? 'Great choice! That’s available.'
                    : 'Hide'
                }
                value={newUserName}
                onChange={(e) => {
                  setNewUserName(e.target.value)
                  setIsNameAvailable(null)
                  debouncedCheckUserName(e.target.value)
                }}
                label=""
                name="username"
                placeholder="username"
                suffix=".account.eth"
                size="large"
                error={isNameAvailable === false && "Oops! That's unavailable."}
              />
            </UserNameInput>

            <Button
              loading={isRegistering}
              disabled={!username || !Boolean(isNameAvailable)}
              onClick={updateUserName}>
              Update Username
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}
