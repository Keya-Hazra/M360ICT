import React from "react";
import { useParams } from "react-router-dom";
import { useGetLaunchQuery } from "../services/LaunchApi";

const SingleLaunch = ()  => {
	const { flight_number } = useParams();

	const { data } = useGetLaunchQuery(flight_number!);
	console.log(data);
	return (
		<div>
			<div>SingleLaunch</div>
			<div>{data?.flight_number}</div>
		</div>
	);
};

export default SingleLaunch;
