import { createApi } from "@reduxjs/toolkit/query/react";
import API_KEY from "../../../config/secrets";
import { baseQuery } from "../basequery";

type Game = {
  // define type here
}

const gameSlice = createApi({
  reducerPath: "gamesAPI",
  baseQuery,
  endpoints: (builder) => ({
    getGameById: builder.query<Game, string>({
      // seems like query arguments must be strings
      query: (id: string) => `games/${id}?key=${API_KEY}`,
    }),
  }),
});

export default gameSlice;
