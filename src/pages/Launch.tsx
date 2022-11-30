import React from "react";
import { useGetLaunchQuery } from "../services/LaunchApi";

const Launch = () => {
	const { data, error, isLoading, isFetching, isSuccess } = useGetLaunchQuery();
	return (
		<div>
		
			{isSuccess && (
				<div>
					{data?.map((launch) => {
						return (
							<div key={launch.flight_number}>
								<div>{launch.mission_name}</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Launch;
