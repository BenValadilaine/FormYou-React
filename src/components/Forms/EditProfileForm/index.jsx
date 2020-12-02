import React from "react";
import FormGroup from '../../FormGroup/index';

const EditProfileForm = ({ }) => {
    return (
        <form action="">


            <h1 className="text-center">Votre profil</h1>


            <FormGroup label="Prenom:" inputName="firstname" inputId="firstname" inputType="text" />

            <FormGroup label="Nom:" inputName="lastname" inputId="lastname" inputType="text" />

            <FormGroup label="Adresse email:" inputName="email" inputId="email" inputType="text" />
            <FormGroup label="Mot de passe:" inputName="password" inputId="password" inputType="password" />
            <FormGroup label="Confirmer le mot de passe:" inputName="password_confirmation" inputId="password_confirmation" inputType="password" />


            <button className="btn btn-scheme-2 btn-lg col-12 my-4" type="submit">VALIDER</button>


        </form>

    )
}

export default EditProfileForm;