const Calendar = ({ date: dateStr, deleteCalender }) => {

    const MONTHLIST = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };
    const DAYSLIST = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const [DD, MM, YYYY] = dateStr.split('/');
    const actualDate = new Date(`${MM}/${DD}/${YYYY}`);
    const month = actualDate.getMonth();
    const year = actualDate.getFullYear();
    const date = actualDate.getDate();

    const getAllDatesOfMonth = (month, year) => {
        let dates = [];
        const lastDay = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= lastDay; day++) {
            dates.push(new Date(year, month, day));
        }
        return dates;
    };

    let dates = getAllDatesOfMonth(month, year);

    const calenderRows = (monthDates) => {
        return monthDates.reduce((acc, val) => {
            let rows = acc;
            if (rows.length === 0) {
                const firstRow = [];
                for (let i = 0; i < val.getDay(); i++) firstRow.push("");
                rows.push([...firstRow, val]);
            } else {
                const lastRow = rows[rows.length - 1];
                if (lastRow.length < 7) lastRow.push(val);
                else rows.push([val]);
            }
            return rows;
        }, []);
    };

    return (
        <div className="border p-2 bg-secondary text-white">
            <div className="row fw-bold">
                <span className="col-10 ps-5 text-center">{MONTHLIST[month]} {year}</span>
                <span className="col-2" onClick={deleteCalender}><i className="bi bi-trash"></i></span>
            </div>
            <div className="mt-2">
                <table style={{ width: '250px', height: '200px' }}>
                    <thead>
                        <tr>
                            {Object.values(DAYSLIST).map((e, i) => (
                                <th className="text-center" key={i}>{e}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {calenderRows(dates).map((rows, i) => {
                            return (
                                <tr key={i}>
                                    {rows?.map((e, index) => {
                                        const dateCell = e && e.getDate();
                                        return (
                                            <td className="text-center"
                                                key={index}
                                                style={{ background: date === dateCell && "white", color: date === dateCell && "black" }}
                                            >
                                                {dateCell}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calendar;
