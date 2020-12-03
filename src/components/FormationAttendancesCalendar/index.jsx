import React, { useState, useEffect, useContext } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import API_REQUEST from "../../services/ApiRequest/ApiRequest";
import { API_ENDPOINTS } from "../../services/ApiRequest/config/config";
import modalContext from "../../context/modalContext";
import ModalContentEvent from '../ModalContentEvent/index';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
const localizer = momentLocalizer(moment)


const FormationAttendancesCalendar = () => {

    // fomation_attendances must be an object containing following properties
    // start time
    // end time
    // title
    // whether its an "all day" event or not
    // any resource the event may be a related too

    const [fomationsAttendances, setfomationsAttendances] = useState([]);


    const { isModalOpen, setModalIsOpen, setModalContent , setModalDatas } = useContext(modalContext);

    // event return datas from big calendar as 
    //{title: "Super formation", start: "2020-12-02T08:54:20.396Z", end: "2020-12-03T08:54:20.396Z, allDay:true}

    const handleSelectEvent = (event) => {
        setModalDatas({...event})
        setModalContent(() => {
            return ModalContentEvent;
        })
        setModalIsOpen(!isModalOpen)
    }


    useEffect(() => {


        // BIG CALENDAR DATA FORMAT

        // {
        //     title: "test",
        //     start: Date.now(),
        //     end: Date.now() + 3600 * 24,
        //     allDay: true
        // }

        // API DATA FORMAT

        // capacity: 20
        // created_at: "2020-12-02T08:54:20.379Z"
        // end_date: "2020-12-03T08:54:20.360Z"
        // formation_id: 2
        // id: 1
        // room_id: 10
        // start_date: "2020-12-02T08:54:20.360Z"
        // updated_at: "2020-12-02T08:54:20.379Z"

        const fetchFormationAttendances = async () => {

            const user_id = jwt_decode(Cookies.get('jwt_token')).sub;

            const response = await API_REQUEST.find(API_ENDPOINTS["users"] + `/${user_id}/formation_attendances`);

            const promises = await response.map((formation_attendance)=>API_REQUEST.find(API_ENDPOINTS["formations"]+`/${formation_attendance.formation_id}`));

            const related_formations = await Promise.all(promises).then((formations)=> formations);

            const formation_attendances = response.map((formation_attendance, index) => {
                return {

                    ...formation_attendance,
                    formation:related_formations[index]
                }
            });
           console.log(formation_attendances);

            //setfomationsAttendances(formation_attendances);
        }

        fetchFormationAttendances()

    }, [])


    return (
        <div>
            <Calendar
                localizer={localizer}
                events={fomationsAttendances}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={(event) => { handleSelectEvent(event) }}
            />
        </div>
    )
}

export default FormationAttendancesCalendar;