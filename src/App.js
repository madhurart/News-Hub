import Navbar from "./components/Navbar"
import About from "./components/About"
import FetchNews from "./components/FetchNews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// import About from "./components/About"
import React from "react"
export default function App() {
  return (
    <>
      <Navbar/> 
       <About/>
      <FetchNews/>
      <Contact/>
      <Footer/>
      
    </>
  )
}
