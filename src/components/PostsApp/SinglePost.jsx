import { cutText, highlightText } from "../../helpers"

export const SinglePost = ({ id, title, body, query }) => {
  return (
    <li className='shadow-md flex flex-col gap-1 p-1'>
      <h3 className='font-bold text-xl'>{highlightText(cutText(title, 35), query)}</h3>
      <p className='text-md'>{highlightText(cutText(body), query)}</p>
    </li>
  )
}
