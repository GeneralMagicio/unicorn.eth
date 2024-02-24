import { Button, Input, Modal, Toggle, Typography } from '@ensdomains/thorin'
import styled, { useTheme } from 'styled-components'
import { ModalHeader } from '@/components/ModalHeader'
import { MagnifyingGlassIcon } from '@/components/Icons/MagnifyingGlass'
import { TickCircleIcon } from '@/components/Icons/TickCircle'
import { QuestionCircleIcon } from '@/components/Icons/QuestionCircle'

export const FindEnsInput = styled(Input)(({ theme }) => ({
  '& ~ label': {
    background: 'transparent',
    color: theme.colors.bluePrimary,
  },
}))
export const AvailableBadge = styled.div(({ theme }) => ({
  background: theme.colors.greenSurface,
  color: theme.colors.greenPrimary,
  borderRadius: '14px',
}))

export const ExpireBadge = styled.div(({ theme }) => ({
  background: theme.colors.greySurface,
  color: theme.colors.textSecondary,
  borderRadius: '14px',
}))
export const TransactionFeeBox = styled.div(({ theme }) => ({
  background: theme.colors.greySurface,
}))

export const BuyEnsModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Find your name" />
        <div className="flex flex-col gap-4">
          <FindEnsInput
            icon={<MagnifyingGlassIcon />}
            label=""
            name="ens-name"
            placeholder="Search available ENS names"
            suffix=".eth"
          />
          <div className="flex justify-between">
            <AvailableBadge className="flex items-center gap-1 px-2 py-1">
              <TickCircleIcon />
              <Typography color="inherit" weight="bold">
                Available
              </Typography>
            </AvailableBadge>
            <ExpireBadge className="flex items-center gap-1 px-2 py-1">
              <Typography color="inherit" weight="bold">
                $5/Year
              </Typography>
            </ExpireBadge>
          </div>
          <div className="flex items-center justify-between">
            <Typography fontVariant="small" color="textSecondary">
              Migrate your wallet to new domain
            </Typography>
            <Toggle size="small" checked />
          </div>
          <TransactionFeeBox className="flex items-center justify-between rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <Typography fontVariant="small">Transaction fee</Typography>
              <QuestionCircleIcon />
            </div>
            <Typography fontVariant="small" color="bluePrimary">
              $15.50 (0.00635 ETH)
            </Typography>
          </TransactionFeeBox>
          <hr />
          <Typography fontVariant="small" color="textSecondary">
            Estimated total cost of{' '}
            <Typography
              className="inline-block"
              color="textPrimary"
              fontVariant="small"
              weight="bold">
              $20.50
            </Typography>{' '}
            with current transaction fees
          </Typography>
        </div>
        <Button>Continue</Button>
      </div>
    </Modal>
  )
}
