import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../store'; // adjust path



 const  Store=configureStore({
    reducer:{
        Todos:TodoReducer,
    }
})

export default Store ;