import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import Filter from '../FilterBlock/Filter'

function Home() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts()
      setProducts(data)
      setFilteredProducts(data)
    }
    fetchProducts()
  }, [])

  const handleSort = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === 'low' ? a.price - b.price : b.price - a.price
    )
    setFilteredProducts(sorted)
  }

  const toggleFilter = () => {
    setShowFilter(prev => !prev)
  }
  let demo = () => {
    let a=10
  }

  return (
    <>
      <Header toggleFilter={toggleFilter} />
      {showFilter && <Filter onSort={handleSort} />}
      <div className='home-page'>
        <div className='poroduct-grid'>
          <SideBar demo={demo} />
          {
            filteredProducts.map((product) => (
              <div className='product' key={product.id}>
                <img src={product.image} alt="alternative" />
                <h2>{product.title}</h2>
                <p className='price'>$ {product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <button>Product Details</button>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home


//