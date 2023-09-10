import { getPostsMeta } from '@/lib/posts'
import ListItem from './ListItem'

export default async function Posts () {
  const posts = await getPostsMeta()

  if (!posts) {
    return (
      <div>
        <h2 className='text-2xl font-bold'>Blog</h2>
        <p>No posts found.</p>
      </div>
    )
  }

  return (
    <section className='mt-6 mx-auto'>
      <h2 className='text-2xl font-bold'>Blog</h2>
      <ul className='w-full list-none p-0'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
