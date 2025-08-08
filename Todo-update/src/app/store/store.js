import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../Features/TodoSlice/TodoSlices';

export const  Store=configureStore({
    reducer:TodoReducer
})