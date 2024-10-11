import React from 'react'
import Header from "./components/Header"
import About from "./components/About"
import Landing from "./components/Landing"
import Background from "./components/Background";
import Title from "./components/Title";
import Card from "./components/Card.jsx";
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx';
import './index.css'
import { WobbleCardDemo } from './components/WobbleCardDemo.jsx';

function App() {


  return (
    <>
      <Header/>
      <Landing/>
      <About/>
      <Background/>
      
     <WobbleCardDemo/>
    <Testimonials/>
    
    <Footer/>
    </>
      
  )
}

export default App
