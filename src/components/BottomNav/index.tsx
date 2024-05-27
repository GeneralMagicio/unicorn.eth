import styled from 'styled-components'
import { ClockIcon } from '@/components/Icons/Clock'
import { SettingsIcon } from '@/components/Icons/Settings'
import { TransactionsIcon } from '@/components/Icons/Transactions'
import { Button, Typography } from '@ensdomains/thorin'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { useRouter } from 'next/navigation'
import { MODAL_TYPE } from '@/utils/modals'
import { UNICORN_MODE } from '@/store/settings'

const StyledNav = styled.nav(({ theme }) => ({
  position: 'fixed',
  bottom: '40px',
  left: '0px',
  right: '0px',
  display: 'flex',
  gap: '40px',
  width: 'max-content',
  margin: 'auto',
  borderRadius: '16px',
  padding: '6px 40px',
  backgroundColor: '#FFF',
  border: `1px solid ${theme.colors.greyLight}`,
  boxShadow:
    '0px 4px 12px 0px rgba(0, 0, 0, 0.12), 0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
  color: theme.colors.textSecondary,
}))

const NavItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
})

const TransactionButton = styled(Button)({
  width: '64px',
  height: '64px',
  background: UNICORN_MODE ? 'var(--gradient-orange)' : 'auto',
  svg: {
    width: '32px',
    height: '32px',
  },
})
export const BottomNav = () => {
  const router = useRouter()
  const [, setActiveModal] = useAtom(activeModalAtom)

  return (
    <StyledNav>
      <NavItem role="button" onClick={() => router.push('/dashboard/history')}>
        <ClockIcon />
        <Typography fontVariant="extraSmall" color="inherit">
          History
        </Typography>
      </NavItem>
      <div className="flex w-16 items-center justify-center">
        <div className="absolute m-auto ">
          <TransactionButton
            size="medium"
            shape="circle"
            onClick={() => setActiveModal(MODAL_TYPE.TRANSACTION)}>
            <TransactionsIcon />
          </TransactionButton>
        </div>
      </div>
      <NavItem onClick={() => setActiveModal(MODAL_TYPE.SETTINGS)}>
        <SettingsIcon />
        <Typography fontVariant="extraSmall" color="inherit">
          Settings
        </Typography>
      </NavItem>
    </StyledNav>
  )
}
