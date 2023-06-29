import { createSlice } from "@reduxjs/toolkit";
export const CharacterR = createSlice({
    name:"character",
        initialState:{
            allCharacter:[],
            seeCharacter:[],
        },
        reducers:{
            getAllCharacter:(state,action)=>{
                state.allCharacter=action.payload;
            },
            postCreateCharacter:(state,action)=>{
                state.seeCharacter=action.payload;
            }
        }
})
export const {
    getAllCharacter,
    postCreateCharacter,
}= CharacterR.actions;