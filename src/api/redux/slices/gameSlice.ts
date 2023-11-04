import { createApi } from "@reduxjs/toolkit/query/react";
import API_KEY from "../../../config/secrets";
import { baseQuery } from "../basequery";

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
  baseQuery,
  endpoints: (builder) => ({
    getGameById: builder.query<Game, string>({
      // seems like query arguments must be strings
      query: (id: string) => `games/${id}?key=${API_KEY}`,
    }),
  }),
});

export const { useGetGameByIdQuery } = gameApi;
