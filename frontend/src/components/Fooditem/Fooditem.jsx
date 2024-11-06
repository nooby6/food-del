import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets' // Adjust the path as necessary

const Fooditem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <img src={assets.rating_starts} alt="Rating Stars" />
            </div>
        </div>
      <p className='food-item-description'>{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  )
}

export default Fooditem
