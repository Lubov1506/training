import { AddArticle } from "./AddArticle"
import { List } from "./List"
import { SearchBar } from "./SearchBar"
import { Sort } from "./Sort"

export const Outlet = ({
  articles,
  onAddToFav,
  selectedTab,
  onDelete,
  favs,
  onDeleteFav,
  searchValue,
  onChangeSearchStr,
  setSortType,
}) => {
  return (
    <div className='flex py-4 px-2 flex-col gap-2'>
      <h1 className='text-3xl p-2 font-bold shadow-[0_0_10px_0_rgba(0,0,0,0.5)]'>
        {selectedTab === "home" ? "List of article" : "Favorites"}
      </h1>
      <div className='flex gap-4 justify-between items-center'>
        <SearchBar
          onChangeSearchStr={onChangeSearchStr}
          searchValue={searchValue}
        />
        <Sort setSortType={setSortType} />
      </div>
      {selectedTab === "home" && (
        <List
          articles={articles}
          onAddToFav={onAddToFav}
          onDelete={onDelete}
          onDeleteFav={onDeleteFav}
          favs={favs}
        />
      )}
      {selectedTab === "favs" && (
        <List
          title='Favorites'
          isFav={true}
          articles={favs}
          onDeleteFav={onDeleteFav}
          searchValue={searchValue}
        />
      )}
      {selectedTab === "add-art" && <AddArticle />}
    </div>
  )
}
