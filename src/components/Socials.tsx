import { SOCIALS } from '@/config'
import LinkButton from './LinkButton'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconSend } from '@tabler/icons-react'
import { SocialMedia } from '@/types'
import { ReactNode } from 'react'

interface SocialProps {
    centered?: boolean
}

type SocialIconsProps = {
    // eslint-disable-next-line no-unused-vars
    [key in SocialMedia]: ReactNode
}

const socialIcons: SocialIconsProps = {
  Github: <IconBrandGithub className='w-6 h-6 sm:w-7 sm:h-w-7' />,
  LinkedIn: <IconBrandLinkedin className='w-6 h-6 sm:w-7 sm:h-w-7' />,
  Twitter: <IconBrandTwitter className='w-6 h-6 sm:w-7 sm:h-w-7' />,
  Mail: <IconSend className='w-6 h-6 sm:w-7 sm:h-w-7' />
}

function Socials ({ centered }: SocialProps) {
  return (
    <div className={`flex ${centered ? ' flex-wrap sm:justify-center gap-1' : ''}`}>
      {
    SOCIALS.filter(social => social.active).map((social, idx) => {
      return (
        <LinkButton
          key={social.name}
          href={social.href}
          className={`link p-2 hover:rotate-6 sm:p-1 ${idx === 0 ? 'xs:pl-0' : ''}`}
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
