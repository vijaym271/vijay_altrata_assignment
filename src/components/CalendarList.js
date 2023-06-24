import { useDispatch, useSelector } from "react-redux";
import Calendar from "./Calendar";
import { useCallback } from "react";
import { removeCalendar } from "../redux/slices/calendarSlice";

const CalendarList = () => {
    const dispatch = useDispatch();
    const { calenders } = useSelector((state) => state.calenderReducer)

    const handleDelete = useCallback((index) => {
        dispatch(removeCalendar(index))
    }, [dispatch])

    if (calenders.length === 0) return <div />
    return <div className="d-flex flex-wrap">
        {calenders.map((date, index) => {
            return <div className="mx-3 my-3" key={index}>{<Calendar date={date} deleteCalender={() => handleDelete(index)} />}</div>
        })}
    </div>
}

export default CalendarList;