import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        email: "",
        localId: "",
        image: ""
    },
    reducers:{
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setLocalId: (state, action) => {
            state.localId = action.payload
        },
        setUserImage: (state, action) => {
            state.image = action.payload
        }
    }
})

export const { setEmail, setLocalId, setUserImage } = userSlice.actions

export default userSlice.reducer