import { configureStore } from '@reduxjs/toolkit'
import NotificationReducer from "../reducers/NotificationReducer";

export const store = configureStore({
	reducer: {
		notification: NotificationReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})