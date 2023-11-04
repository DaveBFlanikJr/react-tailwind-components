import { fetchBaseQuery } from "@reduxjs/toolkit/query"

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.rawg.io/api/games",
  prepareHeaders: (headers) => {

    // specifying content type application/json is usually not necessary.
    // RTK query will infer the content type from your request
    headers.set('content-type', `application/json`)
    return headers
  },
})
