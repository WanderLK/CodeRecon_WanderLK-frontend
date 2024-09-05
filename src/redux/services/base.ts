import config from '@/config';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
    baseUrl: config.api_url,
    credentials: 'include'
});
