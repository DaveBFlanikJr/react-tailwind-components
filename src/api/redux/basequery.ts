import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  /* you might want to change this to https://api.rawg.io in case it's 
  an external api, otherwise just keep it as /api in case it's something 
  you are hosting yourself */
  baseUrl: "https://api.rawg.io/api/games",
  prepareHeaders: (headers) => {
    // specifying content type application/json is usually not necessary.
    // RTK query will infer the content type from your request
    headers.set("content-type", `application/json`);
    return headers;
  },
});
