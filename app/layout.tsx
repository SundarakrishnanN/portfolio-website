import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import { AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sundarakrishnan N',
  description: 'Web Developer & Researcher Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F0F4F8] text-[#1A202C]`}>
        <Header />
        <AnimatePresence mode="wait">
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </AnimatePresence>
      </body>
    </html>
  )
}

