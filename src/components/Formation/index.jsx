import React from "react";
import { useHistory } from "react-router-dom";
import { capitalize } from "../../helpers/string";


const Formation = ({ id, title, description, created_at, updated_at }) => {

    const history = useHistory()
    const redirect = (id) => {

        history.push(`/formation/${id}`)


    }
    return (
        <div className="card p-4 border-rounded" onClick={() => redirect(id)} id={id}>


            <div className="row">


                <div className="col-4 d-flex flex-column justify-content-center">

                    <img src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg" alt="" className="img-fluid" />

                </div>

                <div className="col-8">

                    <h5>{capitalize(title)}</h5>

                    <p>{description}</p>

                </div>



            </div>


        </div>
    )

}

export default Formation