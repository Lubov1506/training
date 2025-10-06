export const PostModal = ({ title, body, tags }) => {
    console.log(tags);
    
  return (
    <div className='flex flex-col gap-1 p-1 px-2'>
      <h2 className='text-2xl max-w-[80%]'>{title}</h2>
      <p>{body}</p>
      <ul className="flex gap-1 flex-wrap">
        {tags?.map((tag, idx) => (
          <li key={idx} className="bg-gray-700 p-1 px-2.5 rounded-sm text-white font-bold">{tag}</li>
        ))}
      </ul>
    </div>
  )
}
