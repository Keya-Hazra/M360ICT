import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLaunchesQuery } from "../services/LaunchApi";
import { LaunchType } from "../types";

const Launch = () => {
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetLaunchesQuery();
	console.log(data);
	const [launchList, setLaunchList] = useState(data);
	console.log(launchList);

	const [searchItem, setSearchItem] = useState("");
	return (
		<div>
			<input
				type="text"
				// value={text}
				placeholder="search"
				onChange={(e) => setSearchItem(e.target.value)}
			/>

			{isSuccess && (
				<div>
					{data
						?.filter((val) => {
							if (searchItem === "") {
								return val;
							} else if (
								val.rocket.rocket_name
									.toLowerCase()
									.includes(searchItem.toLowerCase())
							) {
								return val;
							}
						})
						.map((val: any, index: any) => {
							return (
								<div key={index}>
									<div>
										<Link to={`/launches/${val.flight_number}`}>
											{val.flight_number}
										</Link>
										{val.mission_name} {val.rocket.rocket_name}
									</div>
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default Launch;
