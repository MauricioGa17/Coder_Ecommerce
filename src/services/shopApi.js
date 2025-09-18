import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtBdBaseUrl = process.env.EXPO_PUBLIC_RTDB_URL;

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: rtBdBaseUrl }),
    endpoints: (builder) => ({
        getCategorias: builder.query({ query: () => 'categorias.json' }),
        getProductosPorCategoria: builder.query({
            query: (categoria) => `productos.json?orderBy="categoria"&equalTo="${categoria}"`,
            transformResponse: (response) => {
                return Object.values(response)
            }
        })
    })
})

export const { useGetCategoriasQuery, useGetProductosPorCategoriaQuery } = shopApi