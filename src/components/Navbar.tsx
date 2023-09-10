import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

function Navbar () {
  return (
    <nav className='p-4 sticky top-0 drop-shadow-xl z-10 backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <div className='md:px-6 prose prose-xl mx-auto flex flex-col justify-between sm:flex-row'>
        <h1 className='text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'
          >
            Jesús Monge
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-4xl lg:text-5xl'>
          <Link
            className='text-white/90 hover:text-white'
            href='https://jesusmongedev.github.io/jmongedev/#skillse'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FaYoutube />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://bio.link/jmongedev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FaLaptop />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://github.com/jesusmongedev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FaGithub />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://twitter.com/jmongedev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
