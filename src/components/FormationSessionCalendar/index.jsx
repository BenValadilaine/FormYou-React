import React, { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
const localizer = momentLocalizer(moment)


const FormationSessionCalendar = (props) => {

    // fomation_session must be an object containing following properties
    // start time
    // end time
    // title
    // whether its an "all day" event or not
    // any resource the event may be a related too

    const [formationsSessions, setFormationsSessions] = useState([
        {
            title: "test",
            start: Date.now(),
            end: Date.now() + 3600 * 24,
            allDay: true
        }
    ]);


    return (
        <div>
            <Calendar
                localizer={localizer}
                events={formationsSessions}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default FormationSessionCalendar;