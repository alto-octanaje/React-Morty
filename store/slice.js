import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:'valores',
    initialState:{
        nombre:'JAB',
        charactersAll:[],
    },
    reducers:{
        guardarnombre:(state,action)=>{
            
            state.nombre=action.payload;
        },
        getAllCharacters:(state,action)=>{
            state.charactersAll=action.payload
        }
    } 
})

export const { guardarnombre, getAllCharacters}= Slice.actions;