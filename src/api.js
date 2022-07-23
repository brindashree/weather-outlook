const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "75e80d4142msheb47a25d9796294p14df4ejsnbdac0ea3d307",
		"X-RapidAPI-Host": "https://community-open-weather-map.p.rapidapi.com",
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
