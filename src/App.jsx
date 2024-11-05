import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Collection from "./Pages/Collection/Collection";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/collection" element={<Collection/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
