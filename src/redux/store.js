import { configureStore } from "@reduxjs/toolkit";
import { calenderReducer } from "./slices/calendarSlice";

export const store = configureStore({
    reducer: {
        calenderReducer: calenderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})