import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'

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
      <body className='scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-white/90'>
        <Providers>
          <Navbar />
          <main className='px-8 md:px-6 prose prose-base md:prose-xl prose-slate dark:prose-invert mx-auto'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
