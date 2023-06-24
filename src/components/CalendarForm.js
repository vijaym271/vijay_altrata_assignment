import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCalender } from "../redux/slices/calendarSlice";

const CalendarForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateRegEx = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
        const [DD, MM] = date.split('/');
        const isValid = (DD <= 31 && MM <= 12)
        if (date.trim().length > 0 && dateRegEx.test(date.trim()) && isValid) {
            dispatch(addCalender(date))
            setDate('')
        }
    }

    const handleChange = (e) => setDate(e.target.value);

    return <div className="col-md-3 mx-auto">
        <form data-testid="calendarForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-7">
                    <input data-testid="calendarInput" className="form-control" name="calendar" value={date} onChange={handleChange} placeholder="eg - 20/5/2023" />
                </div>
                <div className="col-md-5">
                    <button data-testid="calendarFormSubmit" className="btn btn-primary" type="submit">Get Calendar</button>
                </div>
            </div>
        </form>
    </div>
}
export default CalendarForm;