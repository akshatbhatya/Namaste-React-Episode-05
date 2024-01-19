import React, { useState } from 'react'
import "./ProductBody.css"
import Product from '../Product/Product'

function ProductBody({data}) {

  let [product,setProduct]=useState(data);

  const FilterData=()=>{
    let sorted=product.filter((res)=>res.card.card.info.avgRating>4.4)
    setProduct(sorted)
  }

  return (
    <>
    <br />
    <button onClick={FilterData}>top rated rated</button>
    <div className='product_list'>
      
      {
        product.map((card,index)=>{
          return <Product card={card} key={index}/>
        })
      }
      
    </div>
    </>
  )
}

export default ProductBody
