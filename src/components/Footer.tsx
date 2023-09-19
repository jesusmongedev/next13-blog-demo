import React from 'react'
import Socials from './Socials'

function Footer () {
  return (
    <footer className='p-4 border-t'>
      <div className='px-4 md:px-8 lg:px-0 prose prose-base md:prose-2xl mx-auto flex items-center flex-col md:flex-row  md:justify-between space-y-2'>
        <span className='text-base text-muted-foreground'>
          &copy; {new Date().getFullYear()}{' '} Jesús Monge.
        </span>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
