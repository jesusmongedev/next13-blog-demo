import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jesus' Blog",
  description: 'Created by Jesus Monge'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} dark:bg-slate-800 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-white/90`}>
        <Providers>
          <Navbar />
          <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
