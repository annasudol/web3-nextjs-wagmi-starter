'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function UIProvider({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        {...themeProps}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
