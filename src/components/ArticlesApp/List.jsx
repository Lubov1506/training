import { Card } from "./Card"

export const List = ({
  articles,
  onAddToFav,
  onDelete,
  title = "List of articles",
  isFav = false,
  onDeleteFav
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold shadow-[0_0_10px_0_rgba(0,0,0,0.5)]'>
        {title}
      </h1>
      <ul>
        {articles?.map((article) =>
          isFav ? (
            <Card
              key={article.id}
              article={article}
              onAddToFav={onAddToFav}
              onDelete={onDelete}
              isFav
              onDeleteFav={onDeleteFav}
            />
          ) : (
            <Card
              key={article.id}
              article={article}
              onAddToFav={onAddToFav}
              onDelete={onDelete}
            />
          )
        )}
      </ul>
    </div>
  )
}
