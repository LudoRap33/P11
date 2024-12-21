import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: null,
        isEditing: false
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        signout: (state) => {
            state.token = null
            state.user = null
        },
        setIsEditing: (state, action) => {
            state.isEditing = action.payload
        }
    }
})

export const { setToken, setUser, signout, setIsEditing } = userSlice.actions

export default userSlice.reducer

export const selectToken = state => state.user.token
export const selectUser = state => state.user.user
export const selectIsEditing = state => state.user.isEditing
