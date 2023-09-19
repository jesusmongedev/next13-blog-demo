import MyProfilePic from '@/components/MyProfilePic'
import Posts from '@/components/Posts'
import Socials from '@/components/Socials'
import { SOCIALS } from '@/config/icons'

export const revalidate = process.env.REVALIDATE

const socialCount = SOCIALS.filter((social) => social.active).length

export default function Home () {
  return (
    <div>
      <MyProfilePic />
      <p className='my-12 text-3xl text-center'>
        Hi and Welcome 👋, I'm <span className='font-bold'>Jesus</span>
      </p>
      <p>
        I'm a Fullstack developer from Ecuador. I have 2 years of experience in
        the tech field, working with technologies like: HTML, CSS, Javascript,
        React, Nextjs, databases, APIS, etc.
      </p>
      <p>
        (This is a sample website inspired from{' '}
        <a className='link' href='https://nextjs.org/learn' target='_blank'>
          {' '}
          Next.js tutorial
        </a>{' '}
        and Dave's{' '}
        <a
          className='link'
          href='https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj'
          target='_blank'
        >
          {' '}
          Next.js Tutorials for Beginners
        </a>
        .)
      </p>
      {socialCount > 0
        ? (
          <div className='flex flex-col sm:flex-row sm:items-center'>
            <p className='mb-1 mr-2 whitespace-nowrap sm:mb-0 sm:mt-0'> Let's connect!</p>
            <Socials />
          </div>
          )
        : null}
      <Posts />
    </div>
  )
}
