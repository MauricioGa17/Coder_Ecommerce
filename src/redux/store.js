import { configureStore } from '@reduxjs/toolkit';

//Slices
import shopReducer from './slices/shopSlice.js';
import cartReducer from './slices/cartSlice.js'
import userReducer from './slices/userSlice.js'

import { shopApi } from '../services/shopApi.js';
import { authApi } from '../services/authApi.js';

import { setupListeners } from '@reduxjs/toolkit/query';
import { perfilApi } from '../services/perfilApi.js';

export const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        userReducer,
        [ shopApi.reducerPath ]: shopApi.reducer,
        [ authApi.reducerPath ]: authApi.reducer,
        [ perfilApi.reducerPath ]: perfilApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => (getDefaultMiddleware().concat(shopApi.middleware)).concat(authApi.middleware).concat(perfilApi.middleware)
});

setupListeners(store.dispatch)