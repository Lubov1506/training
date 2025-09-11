import clsx from "clsx"
import { Card } from "./Card"

export const List = ({
  articles,
  onAddToFav,
  onDelete,
  isFav,
  onDeleteFav,
  favs
}) => {
  
  return (
    <div className='flex flex-col gap-4'>

      <ul className={clsx("flex flex-col gap-3", isFav && "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ")}>
        {articles?.map((article) => (
          <Card
            key={article.id}
            article={article}
            onAddToFav={onAddToFav}
            onDelete={onDelete}
            isFav={isFav}
            onDeleteFav={onDeleteFav}
            favs={favs}
          />
        ))}
      </ul>
    </div>
  )
}
