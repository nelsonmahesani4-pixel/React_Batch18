import React from 'react'
import { HashRouter  , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';    
import ProductDetail from '../pages/ProductDetail';
import Login from '../components/Login';
function Routing() {
  return (
    <div>
         
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/:title" element={<ProductDetail/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </HashRouter>


    </div>
  )
}

export default Routing
