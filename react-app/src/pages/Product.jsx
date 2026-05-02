import React from 'react'
import products from '../data/User'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div>
        <Link to="/"><button>Go Back</button></Link>
      {
        products.map((product)=>{
          return(
              <ProductCard product={product} />
          )
        })
      }
    </div>
   
  )
}

export default Product
