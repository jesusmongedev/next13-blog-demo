import Link from 'next/link'

import { MainNavItems } from '@/types'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  items: MainNavItems
  className?: string
  children?: React.ReactNode
}

export function MobileNav ({ items, className, children }: MobileNavProps) {
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
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  )
}
