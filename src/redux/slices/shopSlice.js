import { createSlice } from "@reduxjs/toolkit";

//Data
import categorias from '../../data/categorias.json'

const shopSlice = createSlice({
    name: "shop",
    initialState:{
        categorias: categorias,
        productos: [],
        categoriaSeleccionada: null,
    },
    reducers:{
        setCategoriaSeleccionada: (state, action) => {
            state.categoriaSeleccionada = action.payload
        }
    }
})

export const { setCategoriaSeleccionada } = shopSlice.actions

export default shopSlice.reducer