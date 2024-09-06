import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/redux/services/base';

const imageService = createApi({
    reducerPath: 'image-service',
    baseQuery: baseQuery,
    tagTypes: ['Image'],
    endpoints: (builder) => ({
        verify: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: `/upload`,
                body
            }),
            invalidatesTags: ['Image']
        })
    })
});

export default imageService;
