'use client'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname  } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Island Nomad',
  description: 'Island Nomad',
}
import { ReduxProvider } from '@/redux/Provider'
import { childrenPropType } from '@/types'

import Navbar from './Navbar';
import Footer from './Footer'

export default function RootLayout({ children }: childrenPropType) {
  const pathname = usePathname() 
  if ( pathname === '/') {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </body>
      </html>
    )
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )

}
