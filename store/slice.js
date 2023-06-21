import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    nombre: "JAB",
    charactersAll: [],
    charactersDetails: {},
    favorites: [],
  },
  reducers: {
    guardarnombre: (state, action) => {
      state.nombre = action.payload;
    },
    getAllCharacters: (state, action) => {
      state.charactersAll = action.payload;
    },
    findCharacterId: (state, action) => {
      state.charactersDetails = action.payload;
    },
    createCharacter: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { guardarnombre, getAllCharacters, findCharacterId,createCharacter } =
  Slice.actions;
