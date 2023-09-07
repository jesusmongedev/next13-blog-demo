import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MyProfilePic from '@/components/MyPRofilePic'

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
    <html lang='en'>
      <body className={`${inter.className} dark:bg-slate-800 mb-12 md:mb-24`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
