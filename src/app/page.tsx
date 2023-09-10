import MyProfilePic from '@/components/MyProfilePic'
import Posts from '@/components/Posts'

export const revalidate = process.env.REVALIDATE

export default function Home () {
  return (
    <div>
      <MyProfilePic />
      <p className='mt-12 mb-12 text-3xl text-center'>
        Hi and Welcome 👋, I'm <span className='font-bold'>Jesus</span>
      </p>
      <p>
        I'm a Fullstack developer from Ecuador. I have 2 years of experience in
        the tech field, working with technologies like: HTML, CSS, Javascript,
        React, Nextjs, databases, APIS, etc. You can contact me on{' '}
        <a
          className='link'
          href='https://twitter.com/jmongedev'
          target='_blank'
        >
          Twitter
        </a>
      </p>
      <p className='mt-4'>
        (This is a sample website inspired from{' '}
        <a className='link' href='https://nextjs.org/learn' target='_blank'>
          {' '}
          Next.js tutorial
        </a> and{' '} Dave's{' '}
        <a className='link' href='https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj' target='_blank'>
          {' '}
          Next.js Tutorials for Beginners
        </a>
        .)
      </p>
      <Posts />
    </div>
  )
}
