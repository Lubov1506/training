import React from "react"
import {Button} from "../Button"

const ProductCard = ({ item, onAdd }) => {

  const { thumbnail, title, price, description } = item
  return (
    <li className=' shadow-xl flex flex-col gap-2 p-2 items-center'>
      <div className='max-w-[200px] overflow-hidden '>
        <img
          className='w-full h-full object-cover hover:scale-105 transition-[all 0.5s ease-in-out]'
          src={thumbnail}
          alt={title}
        />
      </div>
      <article className='flex flex-col p-2.5 gap-1 w-full'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-xs'>{description}</p>
        <div className='flex justify-between items-center'>
          <p className='text-xl'>{price}$</p>
          <Button cn='text-xs' onClick={()=>onAdd(item)}>Add to cart</Button>
        </div>
      </article>
    </li>
  )
}


export default ProductCard
/*     {
    "id": 30,
    "title": "Kiwi",
    "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    "category": "groceries",
    "price": 2.49,
    "discountPercentage": 15.22,
    "rating": 4.93,
    "stock": 99,
    "tags": [
    "fruits"
    ],
    "sku": "GRO-BRD-KIW-030",
    "weight": 5,
    "dimensions": {
    "width": 19.4,
    "height": 18.67,
    "depth": 17.13
    },
    "warrantyInformation": "6 months warranty",
    "shippingInformation": "Ships overnight",
    "availabilityStatus": "In Stock",
    "reviews": [
    {
    "rating": 4,
    "comment": "Highly recommended!",
    "date": "2025-04-30T09:41:02.053Z",
    "reviewerName": "Emily Brown",
    "reviewerEmail": "emily.brown@x.dummyjson.com"
    },
    {
    "rating": 2,
    "comment": "Would not buy again!",
    "date": "2025-04-30T09:41:02.053Z",
    "reviewerName": "Jackson Morales",
    "reviewerEmail": "jackson.morales@x.dummyjson.com"
    },
    {
    "rating": 4,
    "comment": "Fast shipping!",
    "date": "2025-04-30T09:41:02.053Z",
    "reviewerName": "Nora Russell",
    "reviewerEmail": "nora.russell@x.dummyjson.com"
    }
    ],
    "returnPolicy": "7 days return policy",
    "minimumOrderQuantity": 30,
    "meta": {
    "createdAt": "2025-04-30T09:41:02.053Z",
    "updatedAt": "2025-04-30T09:41:02.053Z",
    "barcode": "2530169917252",
    "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
    "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"
    } */
