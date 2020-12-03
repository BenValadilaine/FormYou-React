import React from "react";
import { parseDate } from "../../helpers/parseDate";
import { capitalize } from "../../helpers/string";

const ModalContentEvent = ({title, start, end, seatLeft, allDay, ...rest}) => {
    return (
        <>
            <h2 className="text-center">{title && capitalize(title)}</h2>

            <h5>Date de début</h5>

            <h5>{start && parseDate(start)}</h5>

            <h5> Date de fin :</h5>


            <h5>{end && parseDate(end)}</h5>

            <h5>Nombre de place restante :</h5>

            <h5>{seatLeft && seatLeft}</h5>

            <div className="row">
                <button className="btn btn-scheme-2 btn-lg col-12 my-4" type="submit" >JE PARTICIPE</button>
            </div>

        </>

    )
}

export default ModalContentEvent