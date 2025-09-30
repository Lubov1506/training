export const SinglePost = ({ id, title, body }) => {
  return (
    <li className='shadow-md flex flex-col gap-1 p-1'>
      <h3 className='font-bold text-xl'>{title}</h3>
      <p className='text-md'>{body}</p>
    </li>
  )
}
