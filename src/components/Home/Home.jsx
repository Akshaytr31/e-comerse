import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'
import {Link} from 'react-router-dom'


function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts()
      setProducts(data)
      console.log(data)
    }
    fetchProducts()
  }, [])
  return (
    <div className='poroduct-grid'>
      {
        products.map((product) => (

          <div className='product' key={product.id}>
            <img src={product.image} alt="alternative" />
            <h2>{product.title}</h2>
            <p className='price'>
              $ {product.price}
            </p>
            <Link to={`/product/${product.id}`}>
              <button>Product Details</button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Home

///


