import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    calenders: ["3/10/2022"]
};

const calenderSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addCalender: (state, action) => {
            state.calenders.push(action.payload);
        },
        removeCalendar: (state, action) => {
            state.calenders.splice(action.payload, 1);
        },
    }
})

export const { addCalender, removeCalendar } = calenderSlice.actions;
export const calenderReducer = calenderSlice.reducer;