import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { env } from "../../config/secrets";

export const baseQueryWithApiKey: ReturnType<typeof fetchBaseQuery> = async (args, api, extraOptions) => {
  const baseUrl = 'https://api.rawg.io/api'
  const baseQuery = fetchBaseQuery({ baseUrl });

  const url = typeof args === 'string' ? args : args.url;
  const enhancedUrl = `${url}${url.includes('?') ? '&' : '?'}key=${env.API_KEY}`;
  const enhancedArgs = typeof args === 'string' ? enhancedUrl : { ...args, url: enhancedUrl };
  return baseQuery(enhancedArgs, api, extraOptions);
};
