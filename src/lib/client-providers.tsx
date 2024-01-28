'use client'

import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { Tokens } from '@ensdomains/thorin/dist/types/tokens'

const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    textSecondary: '#9B9BA7',
  },
  fontWeights: {
    ...lightTheme.fontWeights,
    extraBold: '700',
    bold: '600',
  },
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={customTheme}>
        <ThorinGlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
