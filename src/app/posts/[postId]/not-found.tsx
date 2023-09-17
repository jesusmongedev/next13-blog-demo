import Link from 'next/link'
import { IconZoomExclamation } from '@tabler/icons-react'

export default function NotFound () {
  return (
    <div className='flex flex-col items-center justify-center h-96'>
      <p>Sorry, the requested post does not exist.</p>
      <IconZoomExclamation className='w-20 h-20' />
      <Link href='/'>Back to Home</Link>
    </div>
  )
}
