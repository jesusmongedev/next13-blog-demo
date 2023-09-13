'use client'
import Link from 'next/link'
import { ComputerDesktopIcon, CodeBracketIcon, XMarkIcon, FolderIcon } from '@heroicons/react/24/solid'
import ThemeSwitcher from './ThemeSwitcher'

function Navbar () {
  return (
    <nav className='p-4 sticky top-0 drop-shadow-xl z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-200 dark:bg-transparent'>
      <div className='md:px-6 prose prose-xl mx-auto flex items-center flex-col justify-between sm:flex-row'>
        <h1 className='text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='nav-link no-underline'
          >
            Jesús Monge
          </Link>
        </h1>
        <div className='flex flex-row justify-center items-center sm:justify-evenly align-middle gap-4 text-2xl lg:text-3xl'>
          <Link
            className='nav-link'
            href='https://jesusmongedev.github.io/jmongedev/#skillse'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FolderIcon className='h-5 w-5' />
          </Link>
          <Link
            className='nav-link'
            href='https://bio.link/jmongedev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <ComputerDesktopIcon className='h-5 w-5' />
          </Link>
          <Link
            className='nav-link'
            href='https://github.com/jesusmongedev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <CodeBracketIcon className='h-5 w-5' />
          </Link>
          <Link
            className='nav-link'
            href='https://twitter.com/jmongedev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <XMarkIcon className='h-5 w-5' />
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
