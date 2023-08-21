import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   email:"",
   firstName:"",
   lastName:"",
   address:"",
   _id:"",
   image:""
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginRedux:(state, action)=>{
            console.log(action.payload.data);
            state._id = action.payload.data._id
            state.email = action.payload.data.email
            state.address = action.payload.data.address
            state.firstName = action.payload.data.firstName
            state.lastName = action.payload.data.lastName
            state.image = action.payload.data.image
        },
        logoutRedux :(state,action)=>{
            state._id = ""
            state.email = ""
            state.address   = ""
            state.firstName = ""
            state.lastName = ""
            state.image =""
        }
    }
})
export const {loginRedux, logoutRedux} = userSlice.actions

export default userSlice.reducer