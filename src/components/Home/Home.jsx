import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'


function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts()
      setProducts(data)
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
              rs {product.price}
            </p>
            <button>Product Details</button>
          </div>
        ))
      }
    </div>
  )
}

export default Home





