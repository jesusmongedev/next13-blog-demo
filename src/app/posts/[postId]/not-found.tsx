import Link from 'next/link'
import { MdTroubleshoot } from 'react-icons/md'

export default function NotFound () {
  return (
    <div className='text-center'>
      <p className='mt-10'>Sorry, the requested post does not exist.</p>
      <MdTroubleshoot className='w-20 h-20' />

      <Link href='/'>Back to Home</Link>
    </div>
  // <div className='flex flex-col items-center justify-center w-full h-96'>
  //   <MdTroubleshoot className='w-20 h-20' />
  //   <h1 className='text-6xl font-bold'>404</h1>
  //   <p className='text-2xl font-bold'>Post not found</p>
  // </div>
  )
}
