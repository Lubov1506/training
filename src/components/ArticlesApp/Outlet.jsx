import { AddArticle } from "./AddArticle"
import { List } from "./List"
import { SearchBar } from "./SearchBar"

export const Outlet = ({
  articles,
  onAddToFav,
  selectedTab,
  onDelete,
  favs,
  onDeleteFav,
}) => {
  return (
    <div className='flex py-4 px-2 flex-col gap-2'>
      <h1 className='text-3xl p-2 font-bold shadow-[0_0_10px_0_rgba(0,0,0,0.5)]'>
        {selectedTab === "home" ? "List of article" : "Favorites"}
      </h1>
      <SearchBar />
      {selectedTab === "home" && (
        <List articles={articles} onAddToFav={onAddToFav} onDelete={onDelete} />
      )}
      {selectedTab === "favs" && (
        <List
          title='Favorites'
          isFav={true}
          articles={favs}
          onDeleteFav={onDeleteFav}
        />
      )}
      {selectedTab === "add-art" && <AddArticle />}
    </div>
  )
}
