import { UNICORN_MODE } from '@/store/settings'
import styled from 'styled-components'

export const SignUpButton = styled.button(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
  padding: `${theme.space['3']} ${theme.space['3']}`,
  gap: '16px',
  border: `1px solid ${theme.colors.borderPrimary} !important`,
  boxShadow: UNICORN_MODE
    ? '0px 4px 0px 0px var(--Brand-colors-Yellow-Yellow-200, #FFB409)'
    : 'none',
}))
