import { ContactItem } from "./ContactItem"

export const ContactsList = ({ items, query, onDelete }) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-2 p-2 w-full '>
      {items?.map((item) => (
        <ContactItem
          key={item.id}
          {...item}
          query={query}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
