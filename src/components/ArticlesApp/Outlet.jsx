import { AddArticle } from "./AddArticle"
import { FavoriteArticles } from "./FavoriteArticles"
import { List } from "./List"

export const Outlet = ({ articles, onAddToFav, selectedTab, onDelete }) => {
  return (
    <div className='flex py-4 px-2 flex-col gap-2'>
      {selectedTab === "home" && (
        <List articles={articles} onAddToFav={onAddToFav} onDelete={onDelete} />
      )}
      {
        selectedTab==='favs' && <FavoriteArticles/>
      }
      {selectedTab==='add-art' && <AddArticle/>}
    </div>
  )
}
