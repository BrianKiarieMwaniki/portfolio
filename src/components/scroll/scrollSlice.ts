import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSection: ""
}

export const scrollSlice = createSlice({
    name:"scroll",
    initialState,
    reducers:{
        setCurrentSection:(state, action) => {
            state.currentSection = action.payload;
        }
    }
})

export const {setCurrentSection} = scrollSlice.actions;

export default scrollSlice.reducer;