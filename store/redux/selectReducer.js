import { createSlice } from "@reduxjs/toolkit";
export const Select = createSlice({
  name: "selection",
  initialState: {
    origin: [],
  },
  reducers: {
    getSelectSpecies: (state, action) => {
      state.species = action.payload;
    },
    getSelectGender: (state, action) => {
      state.gender = action.payload;
    },
    getSelectStatus: (state, action) => {
      state.status = action.payload;
    },
    getSelectOrigin: (state, action) => {
      state.origin = action.payload;
    },
    getSelectLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  getSelectSpecies,
  getSelectGender,
  getSelectStatus,
  getSelectOrigin,
  getSelectLocation,
} = Select.actions;
