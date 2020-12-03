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

    const [userRole, setUserRole] = useState("")

    const { isModalOpen, setModalIsOpen, setModalContent, setModalDatas } = useContext(modalContext);

    // event return datas from big calendar as 
    //{title: "Super formation", start: "2020-12-02T08:54:20.396Z", end: "2020-12-03T08:54:20.396Z, allDay:true}

    const handleSelectEvent = (event) => {
        setModalDatas({ ...event })
        setModalContent(() => {
            return ModalContentEvent;
        })
        setModalIsOpen(!isModalOpen)
    }




    useEffect(() => {

        const fetchFormationAttendances = async () => {

            const user_id = jwt_decode(Cookies.get('jwt_token')).sub;

            const user_role = await API_REQUEST.find(API_ENDPOINTS['users'] + `/${user_id}/roles`);

            setUserRole(user_role.name);

            if (user_role === "student") {
                const formation_attendances = await API_REQUEST.find(API_ENDPOINTS["users"] + `/${user_id}/formation_attendances`);

                const promises_formations = await formation_attendances.map((formation_attendance) => API_REQUEST.find(API_ENDPOINTS["formations"] + `/${formation_attendance.formation_id}`));

                const related_formations = await Promise.all(promises_formations).then((formations) => formations);

                const promises_formation_sessions = await formation_attendances.map((formation_attendance) => API_REQUEST.find(API_ENDPOINTS["formation_sessions"] + `/${formation_attendance.formation_session_id}`));

                const related_formation_sessions = await Promise.all(promises_formation_sessions).then((formation_sessions) => formation_sessions)

                const formation_sessions = formation_attendances.map((formation_attendance, index) => {

                    return {

                        title: related_formations[index].title,
                        start: related_formation_sessions[index].start_date,
                        end: related_formation_sessions[index].end_date,
                        allDay: true,
                        resource: {
                            formation: related_formations[index],
                            formation_session: related_formation_sessions[index],
                            formation_attendance: formation_attendances[index]
                        }
                    }
                });

                setfomationsAttendances(formation_sessions);
            } else {
                const formations = await API_REQUEST.find(API_ENDPOINTS["formations"]);

                const teacher_formations = formations.filter((formation) => formation.teacher_id === user_id)

                // TEST PURPOSES WITH ALL FORMATIONS
                // const teacher_formations = formations.filter((formation) => formation.teacher_id != user_id)


                if (teacher_formations.length > 0) {
                    const formation_attendances_promises = await formations.map((formation) => API_REQUEST.find(API_ENDPOINTS["formations"] + `/${formation.id}/formation_attendances`));

                    const nested_formation_attendances = await Promise.all(formation_attendances_promises).then((promise) => promise);

                    const formation_attendances = [];

                    nested_formation_attendances.map((e) => formation_attendances.push(...e));

                    const formation_sessions_promises = await formation_attendances.map((formation_attendance) => API_REQUEST.find(API_ENDPOINTS["formation_sessions"] + `/${formation_attendance.formation_session_id}`));

                    const related_formation_sessions = await Promise.all(formation_sessions_promises).then((promise) => promise);

                    const formation_sessions = formation_attendances.map((formation_attendance, index) => {

                        return {

                            title: teacher_formations[index].title,
                            start: related_formation_sessions[index].start_date,
                            end: related_formation_sessions[index].end_date,
                            allDay: true,
                            resource: {
                                formation: teacher_formations[index],
                                formation_session: related_formation_sessions[index],
                                formation_attendance: formation_attendances[index]
                            }
                        }
                    });

                    setfomationsAttendances(formation_sessions);
                }

            }

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