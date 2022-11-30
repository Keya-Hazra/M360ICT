import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { LaunchApi } from "./services/LaunchApi";

export const store = configureStore({
	reducer: {
		[LaunchApi.reducerPath]: LaunchApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(LaunchApi.middleware),
});
setupListeners(store.dispatch);
