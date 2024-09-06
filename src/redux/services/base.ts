import config from '@/config';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';

export const noAuthBaseQuery = fetchBaseQuery({
    baseUrl: config.api_url,
    credentials: 'include'
});

export const baseQuery = fetchBaseQuery({
    baseUrl: config.api_url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }: any) => {
        const token = getCookie('token');

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    }
});

export const verifierBaseQuery = fetchBaseQuery({
    baseUrl: config.image_api_url,
    credentials: 'include'
});
