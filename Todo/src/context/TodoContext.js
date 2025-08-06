import { useContext,createContext } from "react";


export const TodoContext=createContext(
    [
        todo={
            id: 1,
            todo: "todo msg",
            Completed:false,
        },
        

    ]
)