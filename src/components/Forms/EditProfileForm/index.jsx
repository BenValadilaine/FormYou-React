import React, {useEffect, useState} from "react";
import FormGroup from '../../FormGroup/index';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import API_REQUEST from "../../../services/ApiRequest/ApiRequest";
import {API_ENDPOINTS} from "../../../services/ApiRequest/config/config";

const EditProfileForm = ({ }) => {

    const [userDatas, setUserDatas] = useState({});


    useEffect(()=>{

        const fetchUserDatas = async () => {
            const jwt_token = Cookies.get('jwt_token');
            const user_id = jwt_decode(jwt_token).sub;
            const response = await API_REQUEST.find(API_ENDPOINTS["users"] + `/${user_id}`, true, jwt_token)
            setUserDatas(response)
        }
    
        fetchUserDatas()
    

    }, [])

    return (
        <form action="">

            <h1 className="text-center">Votre profil</h1>


            <FormGroup label="Prenom:" inputName="firstname" inputId="firstname" inputType="text" />

            <FormGroup label="Nom:" inputName="lastname" inputId="lastname" inputType="text" />

            <FormGroup label="Adresse email:" inputName="email" inputId="email" inputType="text" value={userDatas?.data?.attributes?.email}/>
            <FormGroup label="Mot de passe:" inputName="password" inputId="password" inputType="password" />
            <FormGroup label="Confirmer le mot de passe:" inputName="password_confirmation" inputId="password_confirmation" inputType="password" />


            <button className="btn btn-scheme-2 btn-lg col-12 my-4" type="submit">VALIDER</button>


        </form>

    )
}

export default EditProfileForm;