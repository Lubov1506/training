import { Button } from "../Button"

export const SideBar = ({onChangeTab}) => {
  return (
    <aside className='bg-gray-100'>
      <h2 className="text-3xl font-bold">ArticleApp</h2>
      <nav className="flex flex-col gap-2">
        <Button onClick={()=>onChangeTab('home')}>Home</Button>
        <Button onClick={()=>onChangeTab('favs')}>Favorites</Button>
        <Button onClick={()=>onChangeTab('add-art')}>Add article</Button>
      </nav>
    </aside>
  )
}
