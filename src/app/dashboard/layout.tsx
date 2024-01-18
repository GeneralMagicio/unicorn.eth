'use client'

import { ClockIcon } from '@/components/Icons/Clock'
import { SettingsIcon } from '@/components/Icons/Settings'
import { TransactionsIcon } from '@/components/Icons/Transactions'
import { SettingsModal } from '@/components/SettingsModal'
import { Button, Typography } from '@ensdomains/thorin'
import { useState } from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
})

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

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen)

  return (
    <StyledLayout>
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
            <TransactionButton size="medium" shape="circle">
              <TransactionsIcon />
            </TransactionButton>
          </div>
        </div>
        <NavItem onClick={toggleSettings}>
          <SettingsIcon />
          <Typography fontVariant="extraSmall" color="inherit">
            Settings
          </Typography>
        </NavItem>
      </BottomNav>
      <SettingsModal open={isSettingsOpen} onDismiss={toggleSettings} />
    </StyledLayout>
  )
}
