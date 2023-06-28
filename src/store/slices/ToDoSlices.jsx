import { createSlice } from "@reduxjs/toolkit";

const ToDoSlices=createSlice({
    name:"Todo",
    initialState:[],
    reducers:{
        addNote(state,action){
            
            
            
            state.push(action.payload)
            

        },
        checkedNote(state,action){

        },
        clearNote(state,action){

        }
    }



})
export default ToDoSlices.reducer;
export const {addNote,checkedNote,clearNote}=ToDoSlices.actions;
    

