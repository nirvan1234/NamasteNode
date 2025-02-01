import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
    name:"requests",
    initialState: null,
    reducers:{
      addRequest:(state, action ) => {
       return action.payload;
      },
      removeRequest:(state , action) =>{
        const newArray = state.filter((r)=>
               r.id !== action.payload
            )
        return newArray;
      }
    }
})

export const {addRequest,removeRequest } = RequestSlice.actions;

export default RequestSlice.reducer;