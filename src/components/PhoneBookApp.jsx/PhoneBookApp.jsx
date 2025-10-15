import { useEffect, useState } from "react"
import contactsList from "../../assets/contacts.json"
import { ContactsList } from "./ContactsList"
import { Form } from "./Form"
import { SearchBar } from "./SearchBar"

export const PhoneBookApp = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"))
    return savedContacts && savedContacts.length ? savedContacts : contactsList
  })
  const [query, setQuery] = useState(
    () => JSON.parse(window.localStorage.getItem("query-phone")) || ""
  )
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
    window.localStorage.setItem("query-phone", JSON.stringify(query))
  }, [contacts, query])

  const getFilteredContacts = (contacts) => {
    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.phoneNumber.includes(query)
    )
  }
  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center'>
      <div className='p-2 shadow-md w-[300px]'>
        <Form setContacts={setContacts} />
      </div>
      <SearchBar query={query} setQuery={setQuery} />
      <ContactsList
        items={getFilteredContacts(contacts)}
        query={query}
        onDelete={handleDelete}
      />
    </div>
  )
}
