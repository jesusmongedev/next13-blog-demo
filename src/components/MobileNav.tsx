import Link from 'next/link'

import { MainNavItems } from '@/types'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface MobileNavProps {
  items: MainNavItems
  className?: string
  toggleMobileMenu: () => void
  children?: React.ReactNode
}

export function MobileNav ({ items, className, toggleMobileMenu, children }: MobileNavProps) {
  return (
    <div
      className={cn(className
      )}
    >
      <nav className='grid grid-flow-row auto-rows-max text-sm'>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? '#' : item.href}
            className={cn(
              'flex w-full items-center rounded-md p-2 text-sm font-medium no-underline text-foreground/60 hover:text-foreground/80',
              item.disabled && 'cursor-not-allowed opacity-60'
            )}
            onClick={item.disabled ? () => {} : toggleMobileMenu}
          >
            {item.title}
          </Link>
        ))}
        <div className='mt-2'>
          <a
            href='https://www.linkedin.com/in/jesusandresmonge/?locale=en_US' target='_blank'
            rel='noopener noreferrer nofollow'
            className='no-underline'
          >
            <Button>Hire me</Button>
          </a>
        </div>
      </nav>
      {children}
    </div>
  )
}
