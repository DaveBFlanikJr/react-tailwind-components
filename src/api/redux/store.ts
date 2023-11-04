/* Will contain the redux toolkit logic to manage all the state of the 
data used in this application */

import { configureStore } from "@reduxjs/toolkit";
import { gameApi } from "./slices/gameSlice";

const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameApi.middleware),
});

export default store;
