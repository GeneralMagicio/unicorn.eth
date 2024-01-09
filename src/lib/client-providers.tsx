"use client";

import { ThorinGlobalStyles, lightTheme } from "@ensdomains/thorin";
import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/styled-components-registry";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={lightTheme}>
        <ThorinGlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
