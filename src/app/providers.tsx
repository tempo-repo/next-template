import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

import { Constants } from '@/constants';

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute='class'
      storageKey={`${Constants.APP_NAME} Theme`}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
