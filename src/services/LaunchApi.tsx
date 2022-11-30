import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LaunchType } from "../types";

export const LaunchApi = createApi({
    reducerPath:'LaunchApi',
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v3" }),
	endpoints: (builder) => ({
		getLaunch: builder.query<LaunchType[], void>({
			query: () => "/launches",
		}),
	}),
});

export const { useGetLaunchQuery } = LaunchApi;
