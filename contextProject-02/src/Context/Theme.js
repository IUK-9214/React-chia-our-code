import { useContext,createContext } from "react";

export const ThemeContext=createContext({

    ThemeMode:"light",
    DarkMode:()=>{},
    LightMode:()=>{},
})

export const ThemeProvider=ThemeContext.Provider
//create a hook here 
export default function UseTheme(){
return useContext(ThemeContext)
}