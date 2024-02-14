import { Button, Input, Modal, Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { useAtom } from 'jotai'
import { ModalHeader } from '@/components/ModalHeader'
import { UserNameInput } from '@/components/Styled'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useEffect, useState } from 'react'
import { TickCircleIcon } from '@/components/Icons/TickCircle'

export const ChangeDomainModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()
  const { userName, setUserName } = useSafeAuth()
  const [changed, setChanged] = useState(false)
  const {
    isRegistering,
    isNameAvailable,
    setIsNameAvailable,
    debouncedCheckUserName,
    createEnsSubname,
  } = useEnsResolver()

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
                isNameAvailable === false
                  ? 'error'
                  : isNameAvailable === true
                    ? 'success'
                    : undefined
              }>
              <Input
                description={
                  userName && isNameAvailable
                    ? 'Great choice! That’s available.'
                    : 'Hide'
                }
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                  setIsNameAvailable(null)
                  debouncedCheckUserName(e)
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
              disabled={!userName || !Boolean(isNameAvailable)}
              onClick={() => {
                createEnsSubname().then(() => {
                  setChanged(true)
                })
              }}>
              Update Username
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}
