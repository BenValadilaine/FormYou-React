import React from "react";
import ListGroup from '../ListGroup/index';


const CardSearch = ({ }) => {
    return (

        <div className="card-search p-4">


            <input type="text" id="formation-search-zone" className="form-control form-control-lg col-12 search-zone" placeholder="Rechercher une formation" />


            <h2 style={{ padding: "0.75rem" }} className="my-4">Categories</h2>


            <ListGroup />


            <button className="col-12 btn btn-lg btn-scheme-2 my-4">VALIDER</button>


        </div>

    )
}

export default CardSearch;