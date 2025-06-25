import React from 'react'
import './Pcard.css'

function Pcard(props) {
  return (
    <div className='Mcontainer'>
       <div className='card'>
    <img src={props.product.imgLink} alt='Product Image'/>
    <div className='card-content'>
      <p className='product-name'>{props.product.name}</p>
      
      
<div className='price'>₹{props.product.price}</div>
       <div className='discount'>{props.product.discount}% Off</div>
      <div className='rating'>{props.product.rating} ★★★★☆ </div>
      <p className='summary'>{props.product.summary}</p>
    
    </div>
  </div>
    </div>
  )
}

export default Pcard
