import Hero from '@/components/Hero'
import Posts from '@/components/Posts'

export const revalidate = process.env.REVALIDATE

export default function Home () {
  return (
    <>
      <Hero />
      <Posts />
    </>
  )
}
