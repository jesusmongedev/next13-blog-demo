import Image from 'next/image'
import Socials from './Socials'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import { SITE } from '@/config/site'
import { SOCIALS } from '@/config/icons'

function Hero () {
  const socialCount = SOCIALS.filter((social) => social.active).length

  return (
    <div className={cn(`h-[calc(100vh-${SITE.headerHeight}px)] pt-20 flex flex-col justify-between md:flex-row md:items-center md:justify-center md:space-x-16 md:p-0`)}>
      {/* Introduction + CTA  */}
      <div className='max-w-sm'>
        <div className='flex flex-col '>
          <h1 className='text-2xl md:text-4xl m-0 mb-4 md:mb-0'>Hey! <span className='animate-wave'>👋</span> <br />
            I'm <span className='font-bold text-primary'>Jesus Monge</span>
          </h1>
          <p className='text-popover-foreground font-medium'>Fullstack Developer <br /> <span className='text-muted-foreground font-normal'>Passionate for crafting solutions that drive tangible results</span>
          </p>
        </div>
        <div className='space-x-4 mb-6'>
          <Button>Resume</Button>
          <Button variant='outline'>View Projects</Button>
        </div>
        {socialCount > 0
          ? (
            <Socials className='mb-12' />
            )
          : null}
      </div>
      {/* Hero Image  */}
      <div className='pb-12 md:p-0 '>
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
