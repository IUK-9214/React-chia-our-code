import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import App from './App.jsx'
import React from 'react'


// function Myapp() {
//   return (
//     <>
//     <h1>
//       chia and react 1 | Ibad ullah khan  
//       </h1>
//       </>
//   )
// }

// const ReactElement={
//     type  : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '__blank'
//     },
// children: 'click me to visit google '
// }

// const anotherElement =(
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

// const ReactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click me to viit google'
// )

createRoot(document.getElementById('root')).render(

  <App/>
)
