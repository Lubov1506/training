import { useState } from "react"
import { Button } from "../Button"
import { FormInput } from "./FormInput"

export const AddArticleForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  const handleCleanForm = () => {
    setTitle("")
    setBody("")
    setAuthor("")
  }
  const handleSubmit = () => {
    if (!title.trim() || !body.trim() || !author.trim()) {
      console.log("Each field has to be not empty")
      return
    }
    onAdd({ title, body, author })
    handleCleanForm()
    onClose()
  }
  return (
    <div className='flex flex-col gap-2'>
      <FormInput value={title} setValue={setTitle} />
      <FormInput value={body} setValue={setBody} placeholder='Body' />
      <FormInput value={author} setValue={setAuthor} placeholder='Author' />

      <Button onClick={handleSubmit}>Add</Button>
    </div>
  )
}
