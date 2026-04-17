import React from 'react'
import products from '../../Data/products'

function ProductCards({product}) {
  return (
    <div style={{border:"2px solid black",margin: 20}}>
      <h1>Title : {product.name}</h1>
      <h2>Price : ${product.price}/-</h2>
      <h2>Weight : {product.weight}</h2>
      <img src="" alt="" />
      <p>Description :{product.desc}</p>

    </div>
  )
}

export default ProductCards
