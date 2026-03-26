import type { Metadata } from 'next';

import { SEOBuilder } from '@/utils/seo';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return (await SEOBuilder.create()).build();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
