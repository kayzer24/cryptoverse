import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': process.env.REACT_APP_BING_NEWS_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_BING_NEWS_API_KEY
}


const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BING_NEWS_API_URL }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`),
        }),
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;