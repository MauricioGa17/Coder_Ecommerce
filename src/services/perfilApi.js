import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtdb_url = process.env.EXPO_PUBLIC_RTDB_URL;

export const perfilApi = createApi({
    reducerPath: "perfilApi",
    baseQuery: fetchBaseQuery({ baseUrl: rtdb_url }),
    endpoints: (builder) => ({
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json` 
        }),
        putProfilePicture: builder.mutation({
            query: (data) => ({
                url: `profilePictures/${data.localId}.json`,
                method: 'PUT',
                body: {
                    image: data.image
                }
            })
        })
    })
})

export const { useGetProfilePictureQuery, usePutProfilePictureMutation } = perfilApi