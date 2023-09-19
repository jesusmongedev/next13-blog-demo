import { SOCIALS } from '@/config/icons'
import LinkButton from './LinkButton'
import { GithubIcon, LinkedinIcon, TwitterIcon, SendIcon } from 'lucide-react'
import { SocialMedia } from '@/types'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SocialProps {
    centered?: boolean
    className?: string
}

type SocialIconsProps = {
    // eslint-disable-next-line no-unused-vars
    [key in SocialMedia]: ReactNode
}

const socialIcons: SocialIconsProps = {
  Github: <GithubIcon className='w-5 h-5 sm:w-6 sm:h-w-6' />,
  LinkedIn: <LinkedinIcon className='w-5 h-5 sm:w-6 sm:h-w-6' />,
  Twitter: <TwitterIcon className='w-5 h-5 sm:w-6 sm:h-w-6' />,
  Mail: <SendIcon className='w-5 h-5 sm:w-6 sm:h-w-6' />
}

function Socials ({ centered, className }: SocialProps) {
  return (
    <div className={cn('flex', {
      'flex-wrap justify-center gap-1': centered
    }, className)}
    >
      {
    SOCIALS.filter(social => social.active).map((social, idx) => {
      return (
        <LinkButton
          key={social.name}
          href={social.href}
          className={cn('link p-2 hover:rotate-6 sm:p-1', {
            'pl-0': idx === 0
          })}
          title={social.linkTitle}
          ariaLabel='social'
          disabled={false}
        >
          {socialIcons[social.name as SocialMedia]}
        </LinkButton>
      )
    })
  }
    </div>
  )
}

export default Socials
