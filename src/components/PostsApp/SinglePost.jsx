import { cutText, highlightText } from "../../helpers"
import { Button } from "../Button"

export const SinglePost = ({ id, title, body, tags, query, openModal }) => {
  return (
    <li className='shadow-md flex flex-col gap-1 p-1'>
      <h3 className='font-bold text-xl'>
        {highlightText(cutText(title, 35), query)}
      </h3>
      <p className='text-md'>{highlightText(cutText(body), query)}</p>
      <Button onClick={() => openModal({ title, body, id, tags })}>
        Show details
      </Button>
    </li>
  )
}
