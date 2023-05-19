import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name: "app",
    initialState: {
        menuFlag: true, 
    },
    reducers: {
        toogleMenu: (state)=>{
            state.menuFlag=!state.menuFlag;
        },
        closeMenu: (state)=>{
            state.menuFlag=false;
        },
    }
})


export const {toogleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;