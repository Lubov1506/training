import React from "react"
import CartList from "./CartList"

const Cart = ({ cart, onDelete, onPlus, onMinus }) => {
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  return (
    <div className='flex flex-col p-2 gap-2 max-w-[550px] '>
      <h2 className='text-3xl font-bold '>Cart</h2>
      <CartList cart={cart} onDelete={onDelete} onPlus={onPlus} onMinus={onMinus} />
      {total > 0 && (
        <p className='text-right font-bold text-2xl'>Total: { Math.round(total * 100) / 100}$</p>
      )}
      {total <= 0 && <p className=' font-bold text-2xl'>Cart is empty</p>}
    </div>
  )
}

export default Cart
