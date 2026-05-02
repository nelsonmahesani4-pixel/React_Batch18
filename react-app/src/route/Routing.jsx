import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Product';    
function Routing() {
  return (
    <div>
        <h1>Routing</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Products/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Routing
