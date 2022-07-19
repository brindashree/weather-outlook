import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import weatherReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	weatherContainer: weatherReducer,
});

export const store = configureStore({
	reducer,
	middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);
