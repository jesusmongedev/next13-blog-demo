import { MdTroubleshoot } from 'react-icons/md'

export default function NotFound () {
  return (
    <div className='flex flex-col items-center justify-center w-full h-96 dark:text-white/90'>
      <MdTroubleshoot className='w-20 h-20' />
      <h1 className='text-6xl font-bold '>404</h1>
      <p className='text-2xl font-bold '>Post not found</p>
    </div>
  )
}
