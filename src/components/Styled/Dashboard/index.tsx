import styled from 'styled-components'

export const UserInfo = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '35px',
  padding: '4px',
  paddingRight: '16px',
  gap: theme.space['2'],
  border: `1px solid ${theme.colors.greyPrimary}`,
  minHeight: '50px',
}))

export const BalanceBox = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  gap: theme.space['4'],
  backgroundColor: theme.colors.backgroundSecondary,
  color: theme.colors.textSecondary,
  padding: '24px 16px',
}))
