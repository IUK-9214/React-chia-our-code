import { useState } from "react"


function App() {
const [color,setColor] =useState("olive")
  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-col flex-wrap justify-center left-6 inset-y-0 py-2">
       <div
       className="flex felx-wrap flex-col justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
         <button
         onClick={()=>setColor("blue")}
         className="px-3 py-2 rounded-2xl font-bold text-white outline-none shadow-lg cursor-pointer transition-transform duration-40  active:scale-90"
         style={{backgroundColor:"blue"}}
        >BLUE</button>
                 <button
         onClick={()=>setColor("red")}
         className="px-3 py-2 rounded-2xl font-bold text-white outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"red"}}
        >RED</button>
                 <button
         onClick={()=>setColor("white")}
         className="px-3 py-2 rounded-2xl font-bold text-black outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"white"}}
        >WHITE</button>
                 <button
         onClick={()=>setColor("pink")}
         className="px-3 py-2 rounded-2xl font-bold text-black outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"pink"}}
        >PINK</button>
                 <button
         onClick={()=>setColor("black")}
         className="px-3 py-2 rounded-2xl font-bold text-white outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"black"}}
        >BLACK</button>
                 <button
         onClick={()=>setColor("indigo")}
         className="px-3 py-2 rounded-2xl font-bold text-white outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"indigo"}}
        >INDIGO</button>
        
                 <button
         onClick={()=>setColor("green")}
         className="px-3 py-2 rounded-2xl font-bold text-white outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"green"}}
        >GREEN</button>
        
                 <button
         onClick={()=>setColor("brown")}
         className="px-3 py-2 rounded-2xl font-bold text-white outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"brown"}}
        >BROWN</button>
        
                 <button
         onClick={()=>setColor("yellow")}
         className="px-3 py-2 rounded-2xl font-bold text-black outline-none shadow-lg cursor-pointer transition-transform duration-40 active:scale-90"
         style={{backgroundColor:"yellow"}}
        >YELLOW</button>
        
       </div>
      </div>

    </div>
  )
}

export default App
