import { dateToLocal } from "../../helpers/dateToLocal"
import { Button } from "../Button"
import { FaStar } from "react-icons/fa6"
export const Card = ({
  article,
  onAddToFav,
  onDelete,
  isFav = false,
  onDeleteFav,
  favs,
}) => {
  const { title, createdAt, body, author, id } = article
  const isExist = favs?.some((item) => item.id === id)

  return (
    <li
      className='flex flex-col gap-1 shadow-[0_0_10px_0_rgba(0,0,0,0.5)] px-2 pb-1 relative'
      key={id}
    >
      {isExist && (
        <FaStar color='gold' className='absolute right-4 top-2' size={22} />
      )}
      <h3 className='text-2xl'>{title}</h3>
      <p>{body}</p>
      <div className='flex gap-2 justify-between'>
        <span>{dateToLocal(createdAt)}</span>
        <span>{author}</span>
      </div>

      <div className='flex justify-end gap-2'>
        {!isFav && (
          <Button
            onClick={() => (isExist ? onDeleteFav(id) : onAddToFav(article))}
          >
            {isExist ? "Removal form fav" : "Add to fav"}
          </Button>
        )}
        <Button
          onClick={() =>
            isFav ? onDeleteFav(article.id) : onDelete(article.id)
          }
        >
          Delete
        </Button>
      </div>
    </li>
  )
}
