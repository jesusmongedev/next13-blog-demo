import Link from 'next/link'
import { FaceFrownIcon } from '@heroicons/react/24/solid'

export default function NotFound () {
  return (
    <div className='flex flex-col items-center justify-center h-96'>
      <p>Sorry, the requested post does not exist.</p>
      <FaceFrownIcon className='w-20 h-20' />
      <Link href='/'>Back to Home</Link>
    </div>
  )
}
