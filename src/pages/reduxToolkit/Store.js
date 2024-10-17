import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
const Store = configureStore({
    reducer: userSlice
})

export default Store