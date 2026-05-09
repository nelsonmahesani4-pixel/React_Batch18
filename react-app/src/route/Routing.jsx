import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';    
import ProductDetail from '../pages/ProductDetail';
function Routing() {
  return (
    <div>
         
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/:title" element={<ProductDetail/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Routing
