import React from 'react'

import "./Search.css"

function Searchbar() {

    const handleEvent=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='inputField'>

      <form action="" onSubmit={handleEvent}>
      <input type="text" />
      <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Searchbar;
