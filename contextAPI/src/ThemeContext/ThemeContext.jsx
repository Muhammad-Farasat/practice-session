import { createContext, useState,  } from "react";


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{


    let [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(( prev )=> prev === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}} > 
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider