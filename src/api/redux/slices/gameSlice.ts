import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithApiKey } from "../basequery";

type Game = {
  // define type here
  id: number,
  title: string,
  description: string,
  raiting: number,
  released: string,
  image: string
};

export const gameApi = createApi({
  reducerPath: "gamesAPI",
  baseQuery: baseQueryWithApiKey,
  endpoints: (builder) => ({
    getGameById: builder.query<Game, string>({
      // seems like query arguments must be strings
      query: (id: string) => `games/${id}`,
    }),
  }),
});

export const { useGetGameByIdQuery } = gameApi;
