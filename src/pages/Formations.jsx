import React from "react";
import Formation from '../components/Formation/index';
import CardSearch from '../components/CardSearch/index';

const FormationPage = () => {
    return (
        <div className="container-fluid m-auto d-flex justify-content-center align-items-center" style={{ minHeight: "95vh" }}>

            <div className="row p-4">

                <div className="col-lg-8 col-12 d-block overflow-auto" id="container-card-room">

                    <div className="card-columns">

                        <Formation />

                        <Formation />
                        <Formation />
                        <Formation />
                        <Formation />
                        <Formation />
                        <Formation />


                        <Formation />

                        <Formation />
                        <Formation />
                        <Formation />
                        <Formation />
                        <Formation />
                        <Formation />

                    </div>

                </div>

                <div className="col-lg-3 d-lg-block d-none offset-lg-1">

                    <CardSearch />

                </div>
            </div>

        </div>

    )
}

export default FormationPage;