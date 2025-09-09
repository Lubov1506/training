import React from "react"
import ProductCard from "./ProductCard"


const ProductList = ({ items, onAdd }) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] '>
      {items?.map((item) => {
        return <ProductCard key={item.id} item={item} onAdd={onAdd} />
      })}
    </ul>
  )
}


export default ProductList
