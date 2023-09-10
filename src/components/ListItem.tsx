import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

type Props = {
  post: Meta;
};

export default function ListItem ({ post }: Props) {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className='mt-4 text-xl'>
      <Link className='link' href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  )
}
