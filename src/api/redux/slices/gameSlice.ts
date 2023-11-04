// Will hold the redux toolkit logic to manage the state for individual games
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import API_KEY from "../../../config/secrets";

const baseUrl: string = `https://api.rawg.io/api/games`;
const gamesAPIHeader = { "content-type": "application/json" };
const createRequest = (url: string) => ({ url, headers: gamesAPIHeader });

const gameSlice = createSlice({
  name: "gamesAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    getGame: builder.query({
      query: (id: number) => createRequest(`games/${id}?key=${API_KEY}`),
    });
  },
});

export default gameSlice;
