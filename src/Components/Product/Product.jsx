import React from 'react'
import "./Product.css"

function Product({card}) {
  const {cloudinaryImageId,locality,name,areaName,cuisines,avgRating,costForTwo}=card.card.card.info
  return (
    <div className='card'>
        <div className="card_image">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/"+cloudinaryImageId} alt="image" />
        </div>
        <div className="card_content">
            <h4>{name}</h4>
            <h4>{locality}</h4>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    </div>
  )
}

export default Product
