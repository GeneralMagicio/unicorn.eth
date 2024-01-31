import styled from 'styled-components'

export const SignUpButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.radii['2xLarge'],
  padding: `${theme.space['3']} ${theme.space['3']}`,
  gap: theme.space['2'],
  border: `2px solid ${theme.colors.borderPrimary}`,
}))
