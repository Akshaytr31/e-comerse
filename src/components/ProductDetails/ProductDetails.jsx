import React, { useEffect,useState } from 'react'
import './ProductDetails.css'
import { getProductId } from '../../ApiService/api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()
  const [productDetails, setProductsDetails] = useState({})
  useEffect(() => {
    const fetchPorductsDetails = async () => {
      const data = await getProductId(id)
      setProductsDetails(data)
    }
    fetchPorductsDetails()
  }, [id])

  const handleBuyNow=()=>{
    window.confirm("the Product is out of store")
  }
  return (
    <div className='product-details-container'>
      <img src={productDetails.image} alt="image" className='product-image' />
      <div className='product-info'>
        <h2>{productDetails.title}</h2>

        <p className='product-description'>{productDetails.discription}</p>
        <p className='product-price' >{productDetails.price}</p>
        <button className='buy-now-button' onClick={handleBuyNow} >Buy Now</button>
        <Link to='/'> 
          <button className='go-back-home-button'>Go back Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails;

