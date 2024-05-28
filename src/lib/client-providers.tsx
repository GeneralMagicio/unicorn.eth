'use client'

import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { UNICORN_MODE } from '@/store/settings'

export const brandColor = UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'

const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    textSecondary: UNICORN_MODE ? '#746866' : '#9B9BA7',
    additionalBorder: '#E8E8E8',
    background: UNICORN_MODE ? 'red' : '#F5F5F5',
    backgroundSecondary: UNICORN_MODE ? '#F7E7CD' : '#F5F5F5',
    greySecondary: UNICORN_MODE ? '#F7E7CD' : '#F5F5F5',
    accent: UNICORN_MODE ? '#FFB409' : '#3889FF',
    orangePrimary: '#FFB409',
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
