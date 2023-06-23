import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./redux/slice";
import { Select } from "./redux/selectReducer";

export default configureStore ({
    reducer:{
        valores:Slice.reducer,
        selection:Select.reducer
    }
}) 