export const generateQueryString = <T,>(data: T) => {
	let queryString = "";
	for (const key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			const value = data[key as keyof T];
			if (value || typeof value === "number") {
				if (queryString.length === 0) {
					queryString += `${key}=${value}`;
				} else {
					queryString += `&${key}=${value}`;
				}
			}
		}
	}
	return queryString;
};