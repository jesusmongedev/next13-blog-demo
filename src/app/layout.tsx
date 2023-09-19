import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import Footer from '@/components/Footer'

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
      <body className='scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-white/90 flex flex-col'>
        <Providers>
          <Navbar />
          <main className='px-8 md:px-12 lg:px-0 prose prose-base md:prose-2xl prose-slate dark:prose-invert mx-auto w-full min-h-[78vh] md:min-h-[82vh]'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
