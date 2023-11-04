// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import API_KEY from "../config/secrets";

// const baseUrl: string = `https://api.rawg.io/api/games`;
// const gamesAPIHeader = { "content-type": "application/json" };
// const createRequest = (url: string) => ({ url, headers: gamesAPIHeader });

// // rawg URL to access a list of games

// const gamesAPI = createApi({
//   reducerPath: "gamesAPI",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => {
//     getGame: builder.query({
//       query: (id: number) => createRequest(`games/${id}?key=${API_KEY}`),
//     });
//   },
// });
