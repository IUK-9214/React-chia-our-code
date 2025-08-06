import React, { useEffect, useState } from 'react'
import { ThemeContext } from './Context/Theme'
import Btn from './component/Btn'
import Card from './component/Card'

function App() {
const [ThemeMode,setThemeMode]=useState("light")

const DarkMode=()=>{
  setThemeMode("dark")
}

const LightMode=()=>{
  setThemeMode("light")
}


useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(ThemeMode)
},[ThemeMode])

  return (
 <ThemeContext value={{ThemeMode,DarkMode,LightMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Btn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                       
                    </div>
                </div>
            </div>
</ThemeContext>
  )
}

export default App