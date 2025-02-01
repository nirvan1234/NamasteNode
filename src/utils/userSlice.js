import { createSlice } from "@reduxjs/toolkit";

// const initialState: CounterState = {
//     value: 0,
//   }


const userSlice = createSlice({
    name:"user",
    initialState: null,
    reducers: {
        addUser: (state, action) =>{
          return action.payload;
        },
        removeuser: (state , action) => {
          return null
        }

    }
})

export const { addUser , removeuser } = userSlice.actions;

export default userSlice.reducer;