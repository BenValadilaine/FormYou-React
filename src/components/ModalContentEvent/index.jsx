import React, { useContext } from "react";
import { parseDate } from "../../helpers/parseDate";
import { capitalize } from "../../helpers/string";
import API_REQUEST from "../../services/ApiRequest/ApiRequest";
import Cookies from 'js-cookie';
import { API_ENDPOINTS } from "../../services/ApiRequest/config/config";
import isUserSignIn from '../../helpers/signActions';
import { Link } from 'react-router-dom';
import modalContext from "../../context/modalContext";
import useRedirectToUrl from '../../helpers/redirect';

// TO SEE PORTAL

const ModalContentEvent = ({ title, start, end, seatLeft, allDay, resource, ...rest }) => {

    // ressource object as 
    // resource:
    // {
    // // capacity: 17
    // // created_at: "2020-12-02T08:54:20.402Z"
    // // formation_id: 1
    // // id: 3
    // // room_id: 9
    // // updated_at: "2020-12-02T08:54:20.402Z"
    // }
    // method to subscribe current user to a formation of his choice
    const handleUserSubscription = async ({ formation_id, id }) => {

        const redirect = useRedirectToUrl;

        if (isUserSignIn()) {
            const datas = {
                "formation_attendance": {
                    "formation_id": `${formation_id}`,
                    "formation_session_id": `${id}`
                }
            }
            const response = await API_REQUEST.create(datas, API_ENDPOINTS['formation_attendances'], true, Cookies.get('jwt_token'));
            if (response.status == 201) {
                redirect("/profile")
            }
        } else {
            console.log("You have to be signed in to make this action")
        }

    }

    const { setModalIsOpen } = useContext(modalContext)

    return (
        <>
            <h2 className="text-center">{title && capitalize(title)}</h2>

            <h5>Date de début</h5>

            <h5>{start && parseDate(start)}</h5>

            <h5> Date de fin :</h5>

            <h5>{end && parseDate(end)}</h5>

            <h5>Nombre de place restante :</h5>

            <h5>{seatLeft && seatLeft}</h5>

            {
                isUserSignIn() ?
                    (
                        <div className="row">
                            <button className="btn btn-scheme-2 btn-lg col-12 my-4" onClick={() => handleUserSubscription(resource)} type="submit" >JE PARTICIPE</button>
                        </div>
                    )

                    : (
                        <div className="row">
                            <Link to="/signin" className="btn btn-scheme-2 btn-lg col-12 my-4" onClick={() => setModalIsOpen(false)}>SE CONNECTER</Link>
                        </div>
                    )
            }


        </>

    )
}

export default ModalContentEvent