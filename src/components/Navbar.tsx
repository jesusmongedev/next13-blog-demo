'use client'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

function Navbar () {
  return (
    <nav className='p-4 sticky top-0 drop-shadow-xl z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-200 dark:bg-transparent'>
      <div className='md:px-6 prose prose-xl mx-auto flex items-center justify-between sm:flex-row '>
        <div className='flex items-center sm:space-x-8'>
          <h1 className='text-2xl grid place-content-center mb-2 md:mb-0'>
            <Link
              href='/'
              className='nav-link dark:text-white/90'
            >
              JMonge<span className='font-bold text-primary'>Dev</span>
            </Link>
          </h1>
          <div className='hidden sm:flex flex-row justify-center items-center sm:justify-evenly align-middle sm:space-x-6 '>
            <Link
              className='link nav-link text-base'
              href='/about'
            >
              About me
            </Link>
            <Link
              className='link nav-link text-base'
              href='/projects'
            >
              Projects
            </Link>
            <Link
              className='link nav-link text-base'
              href='/blog'
            >
              Blog
            </Link>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
