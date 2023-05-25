import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"

const INITIAL_STATE = {
    darkmode:true,
}



export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)

    return (
        <DarkModeContext.Provider value={{darkmode:state.darkmode, dispatch}}>{children}</DarkModeContext.Provider>
    )

}