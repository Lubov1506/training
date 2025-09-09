import React from "react"
import CartItem from "./CartItem"

const CartList = ({ cart, onDelete, onPlus, onMinus }) => {
  return (
    <ul className='flex flex-col gap-2 '>
      {cart?.map((item, idx) => {
        return (
          <CartItem key={item.id} item={item} idx={idx} onDelete={onDelete} onPlus={onPlus} onMinus={onMinus} />
        )
      })}
    </ul>
  )
}

export default CartList
