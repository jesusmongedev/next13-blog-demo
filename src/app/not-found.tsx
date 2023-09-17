import Link from 'next/link'
import { IconProgress } from '@tabler/icons-react'

export default function NotFound () {
  return (
    <div className='flex flex-col items-center justify-center h-96'>
      <p>Page under construction</p>
      <IconProgress className='w-20 h-20' />
      <Link href='/'>Back to Home</Link>
    </div>
  )
}
