import clsx from "clsx"
import { Card } from "./Card"

export const List = ({
  articles,
  onAddToFav,
  onDelete,
  title = "List of articles",
  isFav,
  onDeleteFav,
}) => {
  
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl p-2 font-bold shadow-[0_0_10px_0_rgba(0,0,0,0.5)]'>
        {title}
      </h1>
      <ul className={clsx("flex flex-col gap-3", isFav && "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ")}>
        {articles?.map((article) => (
          <Card
            key={article.id}
            article={article}
            onAddToFav={onAddToFav}
            onDelete={onDelete}
            isFav={isFav}
            onDeleteFav={onDeleteFav}
          />
        ))}
      </ul>
    </div>
  )
}
