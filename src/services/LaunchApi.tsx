import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LaunchType } from "../types";

export const LaunchApi = createApi({
	reducerPath: "LaunchApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v3" }),
	tagTypes: ["launch"],
	endpoints: (builder) => ({
		getLaunches: builder.query<LaunchType[], void>({
			query: () => `/launches`,
			providesTags: ["launch"],
		}),
		getLaunch: builder.query<LaunchType, string>({
			query: (flight_number) => `/launches/${flight_number}`,
			providesTags: ["launch"],
		}),
	}),
});

export const { useGetLaunchesQuery, useGetLaunchQuery } = LaunchApi;
