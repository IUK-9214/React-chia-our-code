import Addtodo from "./Components/Addtodo"
import Todo from "./Components/Todo"

function App() {


  return (
     <>
     <div className="justify-center ">
     <h1 className="text-center pt-2 text-3xl text-white font-bold" >TODOS</h1>
     <Addtodo/>
     <Todo/>
     </div>
     </>
  )
}

export default App
