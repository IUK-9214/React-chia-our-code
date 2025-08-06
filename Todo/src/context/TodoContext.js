import { useContext,createContext } from "react";
 
export const TodoContext=createContext(
    {
        todos : [
            {
            id: 1,
            todo: "todo msg",
            Completed:false
        },
        ] ,
        Addtodo: (todo)=>{},
        UpdateTodo: (id,todo)=>{},
        DeleteTodo: (id)=>{},
        ToggleComplete :(id)=>{}
    }
)

export const TodoContextProvider= TodoContext.Provider

export default function UseTodo(){
    return useContext (TodoContext)
}