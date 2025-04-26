import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 'en'
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers:{
        translate: (state)=> {
            state.value = state.value === 'en' ? 'ur' : 'en'
        }
    }
})

export const { translate } = languageSlice.actions
export default languageSlice.reducer