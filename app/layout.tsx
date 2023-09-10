import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: '🐥の集会',
  description: 'みんはやで活動中の「🐥の集会」公式ホームページです！',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
