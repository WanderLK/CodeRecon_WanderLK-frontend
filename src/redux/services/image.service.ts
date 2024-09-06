import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/redux/services/base';

const imageService = createApi({
    reducerPath: 'image-service',
    baseQuery: baseQuery,
    tagTypes: ['Image'],
    endpoints: (builder) => ({
        upload: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: `/images/upload`,
                body
            }),
            invalidatesTags: ['Image']
        })
    })
});

export default imageService;
