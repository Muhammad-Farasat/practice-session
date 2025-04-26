import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import languageReducer from './languageSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageReducer,
        theme: themeReducer

    }
})