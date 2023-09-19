import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'
import { CodeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type LogoProps = {
  hideTitle?: boolean
}

function Logo ({ hideTitle }: LogoProps) {
  const firstPart = SITE.title.slice(0, 6)
  const secondPart = SITE.title.slice(6, 9)
  return (
    <Link
      href='/'
      className='text-foreground/90 hover:text-foreground/80 nav-link flex items-center space-x-2 '
    >
      <CodeIcon className='text-primary' />
      <span className={cn(hideTitle ? 'hidden sm:inline-block' : '')}>
        {firstPart}<span className='text-primary font-bold'>{secondPart}</span>
      </span>
    </Link>
  )
}

export default Logo
