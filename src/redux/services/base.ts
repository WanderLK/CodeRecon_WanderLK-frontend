import config from '@/config';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noAuthBaseQuery = fetchBaseQuery({
    baseUrl: config.api_url,
    credentials: 'include'
});

export const baseQuery = fetchBaseQuery({
    baseUrl: config.api_url,
    credentials: 'include'
});

export const verifierBaseQuery = fetchBaseQuery({
    baseUrl: config.image_api_url,
    credentials: 'include'
});
