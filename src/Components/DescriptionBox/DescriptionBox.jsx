import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website facilitates online buying and selling of goods or services. Users can browse products, add them to cart, and securely make purchases using various payment methods. Sellers can manage their inventory, process orders, and interact with customers. Features often include product categorization, search functionality, and user reviews. E-commerce sites aim to provide a convenient and efficient platform for commercial transactions over the internet.</p>
        </div>
    </div>
  )
}

export default DescriptionBox