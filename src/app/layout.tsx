import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
