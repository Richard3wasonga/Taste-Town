import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const { state } = useLocation()
  const product = state?.product
  const navigate = useNavigate()

  const handleBackToList = () => {
    navigate('/Menu')  
  }

  if (!product) { 
    return( 
        <>
            <p>Product not found.</p>
        </>
    )
  }

  return (
    <div className='product-detail'>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>{product.description || 'No description available.'}</p>
      <button className="back-to-list-btn" onClick={handleBackToList}>Back to Product List</button>
    </div>
  )
}

export default ProductDetail