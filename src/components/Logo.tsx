import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo () {
  const { theme } = useTheme()
  return (
    <Link
      href='/'
      className='text-foreground/90 hover:text-foreground/80 nav-link flex items-center space-x-2 prose-img:m-0'
    >
      <Image
        className={cn({
          hidden: theme === 'light'
        })} src='/jmongedev.svg' alt={SITE.title} width={140} height={30}
      />
      <Image
        className={cn({
          hidden: theme === 'dark'
        })} src='/jmongedev.dark.svg' alt={SITE.title} width={140} height={30}
      />
    </Link>
  )
}

export default Logo
