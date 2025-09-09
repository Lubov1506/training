import React, { useEffect, useState } from "react"
import Header from "./Header"
import ProductList from "./ProductList"
import productsData from "../../assets/products.json"
import Cart from "./Cart"
const ProductsApp = () => {
  const [items, setItems] = useState(productsData)
  const [cart, setCart] = useState(() => {
    const selectedItems = window.localStorage.getItem("cart")
    if (selectedItems !== null) {
      return JSON.parse(selectedItems)
    }
    return []
  })
  const [selectedTab, setSelectedTab] = useState("home")

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleAddProduct = (prod) => {
    const existProd = cart.some((item) => item.id === prod.id)

    if (existProd) {
      return handleIncreaseQty(prod)
    }

    return setCart((prev) => [...prev, { ...prod, quantity: 1 }])
  }
  const handleDeleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }
  const handleIncreaseQty = (prod) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === prod.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }
  const handleDecreaseQty = (prod) => {
    if (prod.quantity === 1) {
      handleDeleteFromCart(prod.id)
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === prod.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    )
  }
  return (
    <div>
      <Header changeTab={setSelectedTab} />
      {selectedTab === "home" && (
        <ProductList items={items} onAdd={handleAddProduct} />
      )}
      {selectedTab === "cart" && (
        <Cart
          cart={cart}
          onDelete={handleDeleteFromCart}
          onPlus={handleIncreaseQty}
          onMinus={handleDecreaseQty}
        />
      )}
    </div>
  )
}

export default ProductsApp
