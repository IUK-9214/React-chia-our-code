import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'
import { Home, About, ContactUs, Github } from './components'; 

// const router =createBrowserRouter([
//   {path:"/",
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact-us",
//       element:<ContactUs/>
//     },
    
//   ]
// }
// ])


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='github' element={<Github/>}/>
      </Route>
    
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
