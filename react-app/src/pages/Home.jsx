import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from './About';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FaqSection from '../components/FaqSection';
import ProductImg from '../components/ProductImg';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <About  />
        <ProductImg />
        <FeatureSection />
        <FaqSection />
        <Footer />
      <h1>Home</h1>
      <Link to={"/products"}><button>View Products</button></Link>
    </div>
  )
}

export default Home
