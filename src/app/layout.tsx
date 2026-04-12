import type { Metadata } from 'next';

import { SEOBuilder } from '@/utils/seo';

import './globals.scss';
import GlobalProviders from './providers';

export async function generateMetadata(): Promise<Metadata> {
  return (await SEOBuilder.create())
    .openGraph({
      overrideImages: false,
    })
    .build();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
