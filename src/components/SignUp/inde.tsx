import { UNICORN_MODE } from '@/store/settings'
import styled from 'styled-components'

export const SignUpButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.radii['2xLarge'],
  padding: `${theme.space['3']} ${theme.space['3']}`,
  gap: theme.space['2'],
  border: `2px solid ${
    UNICORN_MODE ? 'var(--borderTetrary)' : theme.colors.borderPrimary
  } !important`,
}))
