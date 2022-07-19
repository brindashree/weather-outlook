import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		getDefaultWeatherDetails: (state) => {
			state.loading = true;
		},
		successDefaultWeatherDetails: (state, action) => {
			state.defaultLocationDetails = action.payload;
			state.loading = false;
		},
		failureDefaultWeatherDetails: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		getNextFiveDayForecast: (state) => {
			state.loading = true;
		},
		successNextFiveDayForecast: (state, action) => {
			state.forecastDetails = action.payload;
			state.loading = false;
		},
		failureNextFiveDayForecast: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
	},
});

export const {
	getDefaultWeatherDetails,
	successDefaultWeatherDetails,
	failureDefaultWeatherDetails,
	getNextFiveDayForecast,
	successNextFiveDayForecast,
	failureNextFiveDayForecast,
} = weatherSlice.actions;
export default weatherSlice.reducer;
