import React from "react"
import Button from "../Button"
import { FaRegTrashAlt } from "react-icons/fa"
import { FaPlus, FaMinus } from "react-icons/fa"
const CartItem = ({ item, idx, onDelete, onPlus, onMinus }) => {

  return (
    <li className='list-none border flex justify-between items-center px-2 py-3 shadow-xs gap-2 '>
      <p>{idx + 1}.</p>
      <img src={item.thumbnail} width={"50px"} alt={item.title} />
      <p className='flex-1'>{item.title} </p>
      <p>{item.price}$</p>
      <div className="flex gap-2 items-center justify-center">
      <Button cn='w-[40px] h-[40px] items-center justify-center' onClick={()=>onMinus(item)} >
          <FaMinus size={18} />
        </Button>
        <p className="text-xl fill-bold">{item.quantity}</p>

        <Button cn='w-[40px] h-[40px] items-center justify-center'  onClick={()=>{onPlus(item)}}>
          <FaPlus size={18} />
        </Button>
      </div>
      <Button
        cn='w-[40px] h-[40px] items-center justify-center'
        onClick={() => onDelete(item.id)}
      >
        <FaRegTrashAlt size={18} />
      </Button>
    </li>
  )
}

export default CartItem
