import { configureStore } from '@reduxjs/toolkit';

//Slices
import shopReducer from './slices/shopSlice.js';
import { shopApi } from '../services/shopApi.js';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        shopReducer,
        [ shopApi.reducerPath ]: shopApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => (getDefaultMiddleware().concat(shopApi.middleware))
});

setupListeners(store.dispatch)