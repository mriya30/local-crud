import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)
export const Store = configureStore({
    reducer: persistedReducer
})
export let persistor = persistStore(Store)
