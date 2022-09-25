import {createSlice} from "@reduxjs/toolkit"

export const userStatusSlice=createSlice({
    name:'checkstatus',
    initialState:{
        status:true
    },
    reducers:{
        active: (state) => { console.log("in active dispatch");
        return {loggedIn: true}} ,
            
        
        inactive: (state) => {
            console.log("in inactive dispatch")
            return {loggedIn: false}
        }
    }
})
export const {active,inactive}
export default userStatusSlice.reducer;