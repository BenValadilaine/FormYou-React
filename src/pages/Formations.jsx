import React, { useState, useEffect } from "react";
import Formation from '../components/Formation/index';
import CardSearch from '../components/CardSearch/index';
import { API_ENDPOINTS } from "../services/ApiRequest/config/config";
import API_REQUEST from '../services/ApiRequest/ApiRequest';

const FormationsPage = () => {


    const [formations, setFormations] = useState([]);

    const [categories, setCategories] = useState([]);

    const [searchFilters, setSearchFilters] = useState([])

    useEffect(async () => {

        const formation_datas = await API_REQUEST.find(API_ENDPOINTS["formations"]);

        const categories_datas = await API_REQUEST.find(API_ENDPOINTS["categories"])

        setFormations(formation_datas);

        setCategories(categories_datas);

    }, []);

    useEffect(async () => {

        setFormations([]);
        const promises = searchFilters.map((e) => API_REQUEST.find(API_ENDPOINTS["categories"] + `/${e.id}`));
        const results = await Promise.all(promises).then((results) => results);

        const final_results = [];
        results.map((formationList) => formationList.map((formation) => final_results.push(formation)));
        setFormations(final_results);

    }, [searchFilters])


    return (
        <div className="container-fluid m-auto d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "95vh" }}>

            <h2 className="align-self-start px-4">Les Formations disponibles:</h2>

            <div className="row p-4">

                <div className="col-lg-8 col-12 d-block overflow-auto" id="container-card-room">

                    <div className="card-columns">

                        {
                            formations.map((formation) => {
                                let { id, title, description, created_at, updated_at } = formation;
                                return <Formation key={id} id={id} title={title} description={description} created_at={created_at} updated_at={updated_at} />
                            })
                        }

                    </div>

                </div>

                <div className="col-lg-3 d-lg-block d-none offset-lg-1">

                    <CardSearch categories={categories} searchFilters={(values) => setSearchFilters(values)} />

                </div>
            </div>

        </div>

    )
}

export default FormationsPage;