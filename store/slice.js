import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:'valores',
    initialState:{
        nombre:'JAB',
        charactersAll:[],
        charactersDetails:{},
    },
    reducers:{
        guardarnombre:(state,action)=>{
            
            state.nombre=action.payload;
        },
        getAllCharacters:(state,action)=>{
            state.charactersAll=action.payload
        },
        findCharacterId:(state,action)=>{
            state.charactersDetails=action.payload
        }
    } 
})

export const { guardarnombre, getAllCharacters,findCharacterId}= Slice.actions;