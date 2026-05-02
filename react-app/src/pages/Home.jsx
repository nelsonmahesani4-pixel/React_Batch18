import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <div>
        <Navbar />
      <h1>Home</h1>
      <Link to={"/product"}><button>View Products</button></Link>
    </div>
  )
}

export default Home
