import React, { useState } from 'react'
import "./Product.css"
import { CDN_URL } from '../../Utils/Constants'


function Product({card}) {

  let {product,setProduct}=useState(card?.card.card.info);
  const {cloudinaryImageId,locality,name,areaName,cuisines,avgRating,costForTwo}=card?.card.card.info
  return (
    <div className='card'>
        <div className="card_image">
            <img src={CDN_URL+cloudinaryImageId} alt="image" />
        </div>
        <div className="card_content">
          <br />
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
