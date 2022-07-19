const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.KEY,
		"X-RapidAPI-Host": process.env.HOST,
	},
};

export const defaultWeather = async (search) => {
	const result = await fetch(
		`https://community-open-weather-map.p.rapidapi.com/weather?q=${search}&units=metric`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return result;
};
export const fetchFiveDayForecast = async (search) => {
	const result = await fetch(
		`https://community-open-weather-map.p.rapidapi.com/forecast?q=${search}&units=metric`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return result;
};
