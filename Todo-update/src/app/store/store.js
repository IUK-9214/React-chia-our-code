import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../../Features/TodoSlice/TodoSlices.js'; 

const Store = configureStore({
  reducer: {
    Todos: TodoReducer 
  }
});

export default Store;