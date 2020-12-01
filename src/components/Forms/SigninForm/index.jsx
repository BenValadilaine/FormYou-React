import React from "react";
// import { FormattedMessage } from 'react-intl';
import signinImage from "../../../assets/img/signin.jpg";

const SigninForm = () => {
	return (
		<div className="container d-flex flex-column justify-content-center" style={{ minHeight: "95vh" }}>

				<div className="row col-12 border-0 p-0 ">

					<div className="col-6 p-0 d-none d-lg-block border-neumorphic border-rounded" style={{ height: "75vh" }}> 
					

							<img src={signinImage} alt="signin image" className="h-100 w-100 border-rounded m-0 p-0"/>



					</div>

					<div className="col-lg-5 offset-lg-1 col-12 border-neumorphic bg-white p-4 d-flex flex-column justify-content-around border-rounded" style={{ height: "75vh" }}>
						

						<form action="">


							<h1>CONNEXION</h1>


							<div className="form-group">

								<label htmlFor="">Adresse email:</label>

								<input type="text" className="form-control"/>


							</div>


							<div className="form-group">

								<label htmlFor="">Mot de passe:</label>

								<input type="text" className="form-control"/>


							</div>



							<button className="btn btn-scheme-2 btn-lg col-12" type="submit">VALIDER</button>

						



						</form>

					</div>


				</div>
		

		</div>
	);
};

export default SigninForm;
