import { useState } from "react"
import { TodoContextProvider } from "./context/TodoContext"
import { useEffect } from "react"

function App() {
  const [todos, Settodos] = useState([])

  const Addtodo = (todo) => {
    Settodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const UpdateTodo = (id, todo) => {
    Settodos((prev) => prev.map((prevTodo) => {
      if (prevTodo.id === id) {
        todo
      } else {
        prevTodo
      }
    }))
  }


 const  DeleteTodo =(id)=>{
Settodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }

const ToggleComplete=(id)=>{
Settodos ((prev)=>prev.map(
(prevTodo)=> prevTodo.id===id ?{...prevTodo,Completd:!prevTodo.Completd}:prevTodo
))
}

useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0){
    Settodos(todos)
  }
},[])


useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))


},[todos])



  return (
    <TodoContextProvider value={{ todos, Addtodo, UpdateTodo, DeleteTodo, ToggleComplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
