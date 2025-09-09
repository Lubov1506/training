import React from "react"
import Button from "../Button"

const Header = ({ changeTab }) => {
  return (
    <header className='font-bold bg-teal-800 text-white px-5 py-2.5 flex items-center justify-between '>
      <h1 onClick={() => changeTab("home")} className="p-2 cursor-pointer">Products header</h1>
      <div>
        <Button onClick={()=>changeTab('cart')}>Cart</Button>
      </div>
    </header>
  )
}

export default Header
