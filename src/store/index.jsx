import { configureStore } from "@reduxjs/toolkit";
import ToDoSlices from "./slices/ToDoSlices";

const store=configureStore({
    reducer:{
        note:ToDoSlices

    }
    
})

export default store;