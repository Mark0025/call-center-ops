import '../styles/globals.css'

import React from 'react';
import { Providers } from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/Header';
import { NextUIProvider } from '@nextui-org/react'

export const metadata = {
  title: 'Call Center Agency',
  description: 'A Next.js 14.2 call center agency application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Providers>
            <Header />
            <NextUIProvider>
              {children}
            </NextUIProvider>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}