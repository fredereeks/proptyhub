import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProptyHubs :: Home',
  description: 'A great platform to rent, buy or sell properties without a crazy commission. We make getting financing or buying a new home easy and efficient',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
