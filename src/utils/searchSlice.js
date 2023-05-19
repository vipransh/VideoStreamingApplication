import { createSlice } from "@reduxjs/toolkit";



const searchSlice=createSlice({
    name: "search",
    initialState: {
        cache: {},
        suggestion: [],
    },
    reducers: {
        cacheResults: (state, action)=>{
             state.cache=Object.assign(state.cache, action.payload);
        },
        setSuggestions: (state, action)=>{
            state.suggestion=action.payload;
        },
    }    

})




export const {cacheResults, setSuggestions}=searchSlice.actions;
export default searchSlice.reducer;