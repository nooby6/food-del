import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'

const Fooditem = ({id,name,price,description,image}) => {

    const[itemCount, setItemCount] = React.useState(0);

  return (
    <div className='food-item'>
        <div className="food-item-container">
            <img className='food-item-image' src={image} alt="" />
            { !itemCount 
                ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="Add Icon" />
                :<div className='food-item-counter'>

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
