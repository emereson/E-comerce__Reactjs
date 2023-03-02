import { createSlice } from "@reduxjs/toolkit";

const openCloseSlice = createSlice ({
    name:'openClose',
    initialState:true,
    reducers:{
        setOpenClose:(state, action) => action.payload
    }
})
export const {setOpenClose} = openCloseSlice.actions

export default openCloseSlice.reducer