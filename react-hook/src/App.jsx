import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0);
{/*assignment add a logic in which we add  the value but not exceed from 20 and nor  less than 0 */}

  const addvalue=()=>{
    if(counter<20){
counter=counter+1;
    }
setcounter(counter);
  }
  const removevalue=()=>{
 if(counter>0){
counter=counter-1;
  }
  setcounter(counter);
  }
  return (
    <>
      <h1>Chia aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
