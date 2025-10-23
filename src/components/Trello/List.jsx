import ListItem from "./ListItem"

const List = ({ items, title }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold text-center'>{title}</h2>
      <ul>
        {items?.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default List
