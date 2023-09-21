import Image from 'next/image'
import Socials from './Socials'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import { SOCIALS } from '@/config/icons'
import { Circle } from 'lucide-react'

function Hero () {
  const socialCount = SOCIALS.filter((social) => social.active).length

  return (
    <div className={cn('py-6 md:py-32 flex flex-col justify-between md:flex-row md:items-center md:justify-center md:space-x-16')}>
      {/* Introduction + CTA  */}
      <div className='max-w-sm space-y-4 md:space-y-6'>
        <div className='flex flex-col'>
          <h2 className='text-2xl md:text-4xl'>
            <span>Hey! <span className='animate-wave-animation inline-block origin-top-left-3/4-3/4'>👋</span></span>
            <br />
            I’m <span className='text-primary'>Jesús Monge</span>
          </h2>
          <div className='mb-1 md:mb-2'>
            <div className='flex items-center space-x-2'>
              <Circle className='text-primary fill-primary' size={8} />
              <span className='text-popover-foreground md:text-xl m-0'>Fullstack Developer </span>
            </div>
          </div>
          <span className='text-muted-foreground font-normal md:text-lg'>Passionate for crafting solutions that drive tangible results</span>
        </div>
        <div className='space-x-4'>
          <Button>Resume</Button>
          <Button variant='outline'>View Projects</Button>
        </div>
        {socialCount > 0
          ? (
            <Socials className='mb-12 md:mb-0' />
            )
          : null}
      </div>
      {/* Hero Image  */}
      <div className='max-w-md mx-auto'>
        <Image
          src='/images/hero1.svg'
          alt='Hero Image'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default Hero
