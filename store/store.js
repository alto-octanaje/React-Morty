import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./redux/slice";
import { Select } from "./redux/selectReducer";
import { CharacterR } from "./redux/charactersReducer";

export default configureStore ({
    reducer:{
        valores:Slice.reducer,
        selection:Select.reducer,
        character:CharacterR.reducer, 
    }
}) 