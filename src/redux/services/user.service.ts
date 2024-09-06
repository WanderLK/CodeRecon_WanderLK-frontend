import { createApi } from '@reduxjs/toolkit/query/react';
import { noAuthBaseQuery } from '@/redux/services/base';

const authServices = createApi({
    reducerPath: 'auth-service',
    baseQuery: noAuthBaseQuery,
    tagTypes: ['AuthSignIn'],
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (props) => ({
                method: 'POST',
                url: `/user/login`,
                body: props
            }),
            invalidatesTags: ['AuthSignIn']
        })
    })
});

export default authServices;
