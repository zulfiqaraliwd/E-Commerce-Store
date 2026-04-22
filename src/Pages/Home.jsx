import React from 'react'
import { Link } from 'react-router-dom'
import ProductCards from '../Components/ProductCards/ProductCards'

function Home({products}) {
  return (
    <div>
      <h1>Home</h1>
<Link to="/about" ><button>back</button></Link>

<div><img src="/assets/images/mainimage.png" alt="" height={600} width="100%" /></div>


<div style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "10px"
}}>
  {products.map((product) => (
    <ProductCards key={product.id} product={product} />
  ))}
</div>
      
    </div>
  )
}

export default Home
