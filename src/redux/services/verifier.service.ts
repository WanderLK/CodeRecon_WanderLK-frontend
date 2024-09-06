import { createApi } from '@reduxjs/toolkit/query/react';
import { verifierBaseQuery } from '@/redux/services/base';

const verifierService = createApi({
    reducerPath: 'verifier-service',
    baseQuery: verifierBaseQuery,
    tagTypes: ['Verifier'],
    endpoints: (builder) => ({
        verify: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: `/upload`,
                body
            }),
            invalidatesTags: ['Verifier']
        })
    })
});

export default verifierService;
