import React from 'react'
import Header from './src/Components/Header/Header'
import Searchbar from './src/Components/Searchbar/Searchbar'
import ProductBody from './src/Components/ProductBody/ProductBody'
import { Data } from './src/Data/Data'


function App() {
  return (
    <div>
        {Header()}
        <Searchbar/>
        <ProductBody data={Data}/>
      
    </div>
  )
}

export default App
