

import { Routes,Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contents from "./pages/Contents"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"

function App() {


  return (
   <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contents" element={<Contents/>}/>
    <Route path="/products" element={<Products/>}/>
  </Routes>
  
   </>
  )
}

export default App
