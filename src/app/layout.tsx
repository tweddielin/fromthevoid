import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'The Void | Music Label',
  description: 'The Void - An independent music label. From the void, we create.',
  keywords: ['music label', 'independent music', 'The Void', 'electronic music'],
  openGraph: {
    title: 'The Void | Music Label',
    description: 'From the void, we create.',
    url: 'https://fromthevoid.space',
    siteName: 'The Void',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
