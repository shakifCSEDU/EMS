import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    role: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    logOut:(state)=>{
      state.user = null;
      state.role = null;
      state.token = null
    }
  },
});

export const {addUser,addToken,addRole,logOut} = userSlice.actions;
export default userSlice.reducer;
