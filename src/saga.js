import { call, put, takeLatest } from "redux-saga/effects";
import { defaultWeather, fetchFiveDayForecast } from "./api";
import {
	failureDefaultWeatherDetails,
	failureNextFiveDayForecast,
	getDefaultWeatherDetails,
	getNextFiveDayForecast,
	successDefaultWeatherDetails,
	successNextFiveDayForecast,
} from "./reducer";

const _ = require("lodash");
const formatData = (data) => {
	data?.map((res) => {
		return (res.dt_txt = res?.dt_txt.split(" ")[0]);
	});
	return _.uniqBy(data, "dt_txt").slice(1, 7);
};

function* fetchDefaultWeather(action) {
	try {
		const result = yield call(defaultWeather, action?.payload);
		if (result) {
			yield put(successDefaultWeatherDetails(result));
		}
	} catch (e) {
		console.log(e);
		yield put(failureDefaultWeatherDetails(e));
	}
}
function* fetchNextFiveDayForcast(action) {
	try {
		const result = yield call(fetchFiveDayForecast, action?.payload);
		if (result) {
			const formattedResult = formatData(result?.list);
			yield put(successNextFiveDayForecast(formattedResult));
		}
	} catch (e) {
		console.log(e);
		yield put(failureNextFiveDayForecast(e));
	}
}
export default function* userSaga() {
	yield takeLatest(getDefaultWeatherDetails.type, fetchDefaultWeather);
	yield takeLatest(getNextFiveDayForecast.type, fetchNextFiveDayForcast);
}
