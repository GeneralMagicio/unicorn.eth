'use client'

import { AuthGuard } from '@/components/AuthGuard'
import { ClockIcon } from '@/components/Icons/Clock'
import { SettingsIcon } from '@/components/Icons/Settings'
import { TransactionsIcon } from '@/components/Icons/Transactions'
import { SendModal } from '@/components/SendModal'
import { SettingsModal } from '@/components/SettingsModal'
import { TokenDetailModal } from '@/components/TokenDetailModal'
import { TransactionModal } from '@/components/TransactionModal'
import { activeModalAtom } from '@/store'
import { Button, Typography } from '@ensdomains/thorin'
import { useAtom } from 'jotai'
import styled from 'styled-components'

const BottomNav = styled.nav(({ theme }) => ({
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
  svg: {
    width: '32px',
    height: '32px',
  },
})
export const enum MODAL_TYPE {
  SETTINGS = 'SETTINGS',
  TRANSACTION = 'TRANSACTION',
  SEND = 'SEND',
  TOKEN_DETAIL = 'TOKEN_DETAIL',
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)

  return (
    <AuthGuard>
      <div className="flex w-full grow flex-col">
        {children}
        <BottomNav>
          <NavItem>
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
        </BottomNav>
        <SettingsModal
          open={activeModal === MODAL_TYPE.SETTINGS}
          onDismiss={() => setActiveModal(null)}
        />
        <TransactionModal
          open={activeModal === MODAL_TYPE.TRANSACTION}
          onDismiss={() => setActiveModal(null)}
        />
        <SendModal
          open={activeModal === MODAL_TYPE.SEND}
          onDismiss={() => setActiveModal(null)}
        />
        <TokenDetailModal />
      </div>
    </AuthGuard>
  )
}
