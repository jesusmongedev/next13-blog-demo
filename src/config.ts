import { Site, SocialObjects } from './types'

export const SITE: Site = {
  website: 'https://next13-blog-demo.vercel.app/',
  author: 'Jesús Monge',
  desc: 'A Next.js blog starter with MDX and Tailwind CSS',
  title: 'JMongeDev',
  ogImage: 'nextBlog.png',
  lightAndDarkMode: true,
  postPerPage: 3
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/jesusmongedev',
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jesusandresmonge/?locale=en_US',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true
  },
  {
    name: 'Mail',
    href: 'mailto:jmonge.swe@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/jmongedev',
    linkTitle: `${SITE.title} on Twitter`,
    active: true
  }
]
