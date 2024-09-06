import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/redux/services/base';

const visaService = createApi({
    reducerPath: 'visa-service',
    baseQuery: baseQuery,
    tagTypes: ['Visa', 'Visas'],
    endpoints: (builder) => ({
        create: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: `/visa/create`,
                body
            }),
            invalidatesTags: ['Visas']
        }),
        update: builder.mutation({
            query: ({ id, ...body }) => ({
                method: 'PATCH',
                url: `/visa/${id}`,
                body: body
            }),
            invalidatesTags: ['Visa', 'Visa']
        }),
        get: builder.query({
            query: ({ id }) => ({
                method: 'GET',
                url: `/visa/${id}`
            }),
            providesTags: ['Visa']
        }),
        getAll: builder.query({
            query: (params) => ({
                method: 'GET',
                url: `/visa`,
                params
            }),
            providesTags: ['Visa']
        })
    })
});

export default visaService;
