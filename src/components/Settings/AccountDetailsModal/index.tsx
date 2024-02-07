import { Button, Input, Modal, Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'
import { useTheme } from 'styled-components'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { ModalHeader } from '@/components/ModalHeader'
import { localCurrencyAtom } from '@/store/settings'
import Image from 'next/image'
import styled from 'styled-components'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import { IconButton } from '@/components/Styled'
import { PenIcon } from '@/components/Icons/Pen'
import { ArrowRightIcon } from '@/components/Icons/ArrowRight'
import { MODAL_TYPE } from '@/app/dashboard/layout'

const UserInfoBox = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '16px',
  gap: theme.space['4'],
  backgroundColor: theme.colors.backgroundSecondary,
  color: theme.colors.textSecondary,
  padding: '8px',
}))

const BuyEnsBox = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '16px',
  gap: theme.space['4'],
  backgroundColor: theme.colors.blueSurface,
  padding: '12px',
}))

export const AccountDetailsModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const { userInfo, userName } = useSafeAuth()

  const [, setActiveModal] = useAtom(activeModalAtom)

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Account Details" />
        <UserInfoBox>
          <div className="flex gap-2 ">
            <div className="relative">
              <Image
                className="rounded-full"
                src={userInfo?.profileImage || ''}
                alt={userInfo?.name || ''}
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <Typography fontVariant="bodyBold">
                {userName}.unicorn.eth
              </Typography>
              <Typography color="textSecondary">{userInfo?.email}</Typography>
            </div>
          </div>
          <IconButton
            colorStyle="transparent"
            shape="square"
            height="20px"
            onClick={() => setActiveModal(MODAL_TYPE.SETTINGS_CHANGE_DOMIAN)}>
            <PenIcon />
          </IconButton>
        </UserInfoBox>
        <div>
          <BuyEnsBox
            onClick={() => setActiveModal(MODAL_TYPE.SETTINGS_BUY_ENS)}
            role="button">
            <div className="flex gap-2 ">
              <div className="relative">
                <Image
                  className="rounded-full"
                  src="/img/ens-mark.svg"
                  alt="ENS logo"
                  width={39}
                  height={44}
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <Typography fontVariant="smallBold">ENS</Typography>
                <Typography color="bluePrimary">
                  Buy a new ENS domain
                </Typography>
              </div>
            </div>
            <IconButton colorStyle="transparent" shape="square" height="24px">
              <ArrowRightIcon />
            </IconButton>
          </BuyEnsBox>
          <div className="mt-4 flex flex-col gap-4">
            <Input
              clearable
              label="Name"
              placeholder="Add a display name"
              type="text"
            />
            <Input
              clearable
              label="Bio"
              placeholder="Add something about yourself"
              type="text"
            />
            <Input
              clearable
              label="Website"
              placeholder="Add your website"
              type="text"
            />
          </div>
        </div>
        <Button>Update</Button>
      </div>
    </Modal>
  )
}
