import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'

// Fooditem component to display individual food item details
const Fooditem = ({id,name,price,description,image}) => {

  // State to keep track of the number of items
  const[itemCount, setItemCount] = React.useState(0);

  return (
  <div className='food-item'>
    <div className="food-item-img-container">
      <img className='food-item-image' src={image} alt="" />
      { !itemCount 
        // If itemCount is 0, show the add icon
        ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="Add Icon" />
        // If itemCount is greater than 0, show the counter with add and remove icons
        :<div className='food-item-counter'>
          <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt='Remove Icon' />
          <p>{itemCount}</p>
          <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt='Add Icon' />
        </div> 
      }
    </div>
    <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="Rating Stars" />
      </div>
    </div>
    <p className='food-item-description'>{description}</p>
    <p className="food-item-price">${price}</p>
  </div>
  )
}

export default Fooditem
