import { createContext, useState } from "react";

export const CounterContext = createContext()


export const CounterProvider = ({children}) =>{


    let [count, setCounter] = useState(0)

    const increaseCount = () => {
        setCounter((prev) => prev  + 1)
    }

    
    const decreaseCount = () => {
        setCounter((prev) => prev === 0 ? 0 : prev- 1)
    }

    return(
        <CounterContext.Provider value={{count, decreaseCount, increaseCount}}>
            {children}
        </CounterContext.Provider>
    )
}