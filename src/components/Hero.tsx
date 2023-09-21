import Image from 'next/image'
import Socials from './Socials'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import { SOCIALS } from '@/config/icons'
import { BadgeCheck, Laptop, Rocket } from 'lucide-react'

function Hero () {
  const socialCount = SOCIALS.filter((social) => social.active).length

  return (
    <div className={cn('py-12 md:my-44  flex flex-col justify-between md:flex-row md:items-center md:justify-center md:space-x-16 md:p-0')}>
      {/* Introduction + CTA  */}
      <div className='max-w-sm space-y-4 md:space-y-6'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl'>Hey! 👋<br />
            I'm <span className='font-bold text-primary'>Jesus Monge</span>
          </h1>
          <div className='mb-1 md:mb-2'>
            <div className='flex items-center space-x-2'>
              <Laptop className='text-primary' size={20} />
              <span className='text-popover-foreground font-medium text-xl m-0'>Fullstack Developer </span>
            </div>
            <div className='flex items-center space-x-2'>
              <Rocket className='text-primary' size={20} />
              <span className='text-popover-foreground font-medium text-xl m-0'>Life long learner</span>
            </div>
            <div className='flex items-center space-x-2'>
              <BadgeCheck className='text-primary' size={20} />
              <span className='text-popover-foreground font-medium text-xl m-0'>Problem Solver</span>
            </div>
          </div>
          <span className='text-muted-foreground font-normal text-lg'>Passionate for crafting solutions that drive tangible results</span>
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
