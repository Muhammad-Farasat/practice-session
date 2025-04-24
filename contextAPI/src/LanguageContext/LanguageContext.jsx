import { createContext, useState } from "react";


export const LanguageContext = createContext()


export const LanguageProvider = ({children}) => {


    let [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        setLanguage((prev) => prev === 'en' ? 'ur' : 'en')
    }


    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}