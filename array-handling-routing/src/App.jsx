

import { Routes,Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contents from "./pages/Contents"
import Products from "./pages/Products"

function App() {


  return (
   <>
  
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
