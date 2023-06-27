import { createSlice } from "@reduxjs/toolkit";
export const CharacterR = createSlice({
    name:"character",
        initialState:{
            allCharacter:[]
        },
        reducers:{
            getAllCharacter:(state,action)=>{
                state.allCharacter=action.payload;
            }
        }
})
export const {
    getAllCharacter,
}= CharacterR.actions;