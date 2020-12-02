import React from "react";
// import { FormattedMessage } from 'react-intl';
import signinImage from "../../../assets/img/signin.jpg";
import FormGroup from '../../FormGroup/index';

const SigninForm = () => {
  return (
    <div className="container d-flex flex-column justify-content-center" style={{ minHeight: "95vh" }}>

      <div className="row col-12 border-0 p-0 border-neumorphic">

        <div className="col-6 p-0 d-none d-lg-block" style={{ height: "75vh" }}>


          <img src={signinImage} alt="signin image" className="h-100 w-100 m-0 p-0" />



        </div>

        <div className="col-lg-6 col-12 bg-white p-4 d-flex flex-column justify-content-around" style={{ height: "75vh" }}>


          <form action="">


            <h1 className="my-5">CONNEXION</h1>

            <FormGroup label="Adresse email:" inputName="email" inputId="email" inputType="text" placeholder="email@example.com" />
            <FormGroup label="Mot de passe:" inputName="password" inputId="password" inputType="password" />


            <button className="btn btn-scheme-2 btn-lg col-12 my-4" type="submit">VALIDER</button>



          </form>

        </div>


      </div>


    </div>
  );
};

export default SigninForm;
