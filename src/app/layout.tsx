import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Island Nomad',
  description: 'Island Nomad',
}
import { ReduxProvider } from '@/redux/Provider'
import { childrenPropType } from '@/types'

import Navbar from './Navbar';

export default function RootLayout({ children }: childrenPropType) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
