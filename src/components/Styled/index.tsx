import { Button } from '@ensdomains/thorin'
import styled from 'styled-components'

export const IconButton = styled(Button)<{ height?: string }>(
  ({ theme, height }) => ({
    padding: 0,
    width: height,
    height: height,
    svg: {
      width: 'unset',
      height: 'unset',
      color: 'unset',
    },
  })
)

export const UserInfo = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '35px',
  padding: '4px',
  paddingRight: '16px',
  gap: theme.space['2'],
  // @ts-ignore
  border: `1px solid ${theme.colors.additionalBorder}`,
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

export const UserNameInput = styled.div<{ varient?: 'success' | 'error' }>(
  ({ theme, varient }) => ({
    '& > div > div:first-child': {
      display: 'none',
    },
    '& > div > div:nth-child(2)': {
      height: '56px',
      '> div': {
        borderColor:
          varient === 'success'
            ? `${theme.colors.green} !important`
            : undefined,
      },
    },
    '& > div > div:last-child': {
      color:
        varient === 'success'
          ? `${theme.colors.green} !important`
          : varient === 'error'
            ? theme.colors.redPrimary
            : 'white',
    },
    label: {
      background: 'transparent',
      color: theme.colors.textPrimary,
    },
  })
)
