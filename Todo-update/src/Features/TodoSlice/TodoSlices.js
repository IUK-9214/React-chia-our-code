import {createSlice, nanoid} from '@reduxjs/toolkit'


 const initialState={
    Todos:[
        {id:1,text:"hello wworld"}
    ]
}

export const TodoSlice=createSlice({
    name:'Todo',
    initialState,
    reducers :{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid,
            text:action.payload
            }
            state.Todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.Todos=state.Todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.Todos=state.Todos.map((todo)=>todo.id===action.payload.id ?{...todo,text:action.payload.text}:todo)
        },
    }
})

export const {addTodo,updateTodo,removeTodo}=TodoSlice.actions;

export default TodoSlice.reducer ;