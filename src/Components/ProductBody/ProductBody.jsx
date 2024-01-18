import React from 'react'
import "./ProductBody.css"
import Product from '../Product/Product'

function ProductBody({data}) {

  return (
    <div className='product_list'>
      {
        data.map((card,index)=>{
          return <Product card={card} key={index}/>
        })
      }
      
    </div>
  )
}

export default ProductBody
