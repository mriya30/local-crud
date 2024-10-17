import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

// const initia={
//     userlist:[]
// }

const initialState={
    userlist:[]
}
const userSlice = createSlice( {
    name:'user',
    // initialState:initial
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action.payload)
            state.userlist.push(action.payload)
        },
        deleteUser:(state,action)=>{
            console.log(action)

            const {payload:id}=action;
            console.log(action.payload)
            console.log(id)

            const newUser=state.userlist.filter((user)=>{
                return user.id!=id
            })
            state.userlist=newUser
        }
    }
})
export const {addUser}=userSlice.actions
export default userSlice.reducer
