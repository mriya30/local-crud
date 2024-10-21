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
        },
        editUser:(state,action)=>{
            console.log(action)
            const {id}=action.payload

            const index=state.userlist.findIndex((user)=>{
                return user.id==id
            })
            if(index!=-1){
                state.userlist[index]=action.payload
            }
        }
    }
})
export const {addUser,deleteUser,editUser}=userSlice.actions
export default userSlice.reducer
