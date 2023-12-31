'use client'
import Link from 'next/link'
import { ModeToggle } from './ModeTheme'
import { mainNavItems } from '@/config/navItems'
import { cn } from '@/lib/utils'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useState } from 'react'
import { LucideMenu, XIcon } from 'lucide-react'
import { MobileNav } from './MobileNav'
import Logo from './Logo'
import { Button } from './ui/button'

function Navbar () {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className={cn('p-4 sticky top-0 z-10 border-b', {
      'bg-background': showMobileMenu,
      'backdrop-filter backdrop-blur-lg bg-background/80 backdrop-saturate-200': !showMobileMenu
    }
    )}
    >
      <div className='px-4 md:px-8 lg:px-0 prose prose-base md:prose-2xl mx-auto flex items-center'>
        <div className='flex items-center sm:space-x-8 flex-1'>
          <Logo />
          {mainNavItems?.length
            ? (
              <nav className='hidden gap-6 md:flex'>
                {mainNavItems?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? '#' : item.href}
                    className={cn(
                      'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm no-underline',
                      item.href.startsWith(`/${segment}`)
                        ? 'text-foreground'
                        : 'text-foreground/60',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              )
            : null}
        </div>
        <div className={cn('flex items-center gap-4')}>
          <ModeToggle />
          <a
            href='https://www.linkedin.com/in/jesusandresmonge/?locale=en_US' target='_blank'
            rel='noopener noreferrer nofollow'
            className='no-underline hidden md:flex'
          >
            <Button variant='modern'>Hire me</Button>
          </a>
          <button
            className='flex tems-center space-x-2 md:hidden'
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? <XIcon /> : <LucideMenu />}
          </button>
          <MobileNav
            className={cn(
              'md:hidden fixed h-[calc(100vh-73px)] z-50 grid grid-flow-row auto-rows-max overflow-auto p-6 shadow-md pb-32 transition-all duration-300',
              {
                'inset-0 bg-background': showMobileMenu,
                'left-[-100%]': !showMobileMenu
              },
              'top-[73px]'
            )}
            items={mainNavItems}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
