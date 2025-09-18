import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "cart",
    initialState:{
        user: "Demo",
        updatedAt: new Date().toLocaleString(),
        cartItems: [],
        total: 0
    },
    reducers:{
        addItemToCart: (state, action) => {
            
            const { producto, cantidad } = action.payload;
            //console.log("Añadiendo Producto al Carrito", producto, cantidad)

            //Verificar si ya esta el carrito
            const productInCart = state.cartItems.find(item => item.id === producto.id)

            if(!productInCart){
                state.cartItems.push({...producto, cantidad});
            }else{
                productInCart.cantidad+=cantidad
            }

            state.updatedAt = new Date().toLocaleString(),
            state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);
        },
        removeItems: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);
            state.updatedAt = new Date().toLocaleString();
        },
        clearCart: (state, action) => {
            state.cartItems = []
            state.total = 0
            state.updatedAt = new Date().toLocaleString()
        } 
    }
})

export const { addItemToCart, removeItems, clearCart } = shopSlice.actions

export default shopSlice.reducer