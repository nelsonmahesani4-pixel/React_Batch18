import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Product';    
import ProductDetail from '../pages/ProductDetail';
function Routing() {
  return (
    <div>
        <h1>Routing</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:title" element={<ProductDetail/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Routing
