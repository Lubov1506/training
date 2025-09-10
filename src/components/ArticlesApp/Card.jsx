import { dateToLocal } from "../../helpers/dateToLocal"
import { Button } from "../Button"

export const Card = ({ article, onAddToFav, onDelete }) => {
  const { title, createdAt, body, author } = article
  return (
    <li className='flex flex-col gap-1 shadow-[0_0_10px_0_rgba(0,0,0,0.5)] px-2 pb-1'>
      <h3 className='text-2xl'>{title}</h3>
      <p>{body}</p>
      <div className='flex gap-2 justify-between'>
        <span>{dateToLocal(createdAt)}</span>
        <span>{author}</span>
      </div>

      <div>
        <Button onClick={() => onAddToFav(article)}>Add to fav</Button>
        <Button onClick={() => onDelete(article.id)}>Delete</Button>
      </div>
    </li>
  )
}
