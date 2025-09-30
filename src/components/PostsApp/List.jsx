import { SinglePost } from "./SinglePost"

export const List = ({ items }) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 p-2'>
      {items?.map((item) => (
        <SinglePost key={item.id} {...item} />
      ))}
    </ul>
  )
}
