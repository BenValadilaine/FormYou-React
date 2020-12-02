import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import API_REQUEST from "../../services/ApiRequest/ApiRequest";
import { API_ENDPOINTS } from "../../services/ApiRequest/config/config";
const localizer = momentLocalizer(moment)


const FormationSessionCalendar = ({ formation_id, formation }) => {

    // fomation_session must be an object containing following properties
    // start time
    // end time
    // title
    // whether its an "all day" event or not
    // any resource the event may be a related too

    const [formationsSessions, setFormationsSessions] = useState([]);



    useEffect(() => {


        // BIG CALENDAR

        // {
        //     title: "test",
        //     start: Date.now(),
        //     end: Date.now() + 3600 * 24,
        //     allDay: true
        // }

        // API

        //         capacity: 20
        // created_at: "2020-12-02T08:54:20.379Z"
        // end_date: "2020-12-03T08:54:20.360Z"
        // formation_id: 2
        // id: 1
        // room_id: 10
        // start_date: "2020-12-02T08:54:20.360Z"
        // updated_at: "2020-12-02T08:54:20.379Z"

        const fetchFormationSessions = async () => {
            const response = await API_REQUEST.find(API_ENDPOINTS["formations"] + `/${formation_id}/formation_sessions`);

            const formation_sessions = response.map(({ start_date, end_date, room_id }) => {

                return {

                    title: formation.title,
                    start: start_date,
                    end: end_date,
                    allDay: true
                }
            });



            setFormationsSessions(formation_sessions);


        }

        fetchFormationSessions()

    }, [])


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