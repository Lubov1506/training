import { IoIosContact } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import { MdDelete, MdEdit } from "react-icons/md"
import { highlightText } from "../../helpers/highlightText"
import { Button } from "../Button"
import { Modal } from "../Modal/Modal"
import { useState } from "react"
import { Form } from "./Form"
export const ContactItem = ({
  id,
  name,
  lastName,
  phoneNumber,
  query,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  return (
    <>
      <li className='flex gap-1  justify-between border rounded-xl p-1 px-2'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-1.5'>
            <IoIosContact />
            <h3>
              {highlightText(name, query)} {highlightText(lastName, query)}
            </h3>
          </div>
          <div className='flex gap-1.5'>
            <FaPhone /> <p>{highlightText(phoneNumber, query)}</p>
          </div>
        </div>

        <div>
          <Button cnButton='pч-[2px]' onClick={() => onDelete(id)}>
            <MdDelete size={14} />
          </Button>
          <Button onClick={onOpen}>
            <MdEdit size={14} />
          </Button>
        </div>
      </li>
      {isOpen && (
        <Modal onClose={onClose} title="Edit contact">
          <Form contact={{ id, name, lastName, phoneNumber }} isEdit />
        </Modal>
      )}
    </>
  )
}
