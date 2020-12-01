import React, { useEffect, useState } from "react";
import SignupForm from "../components/Forms/SignupForm";
// import { FormattedMessage } from 'react-intl';
import signupImage from "../assets/img/signup.jpg";

const Signup = () => {

	const [currentStep, setCurrentStep] = useState(1);
	const [accountType, setAccountType] = useState("student");
	const [userDatas, setUserDatas] = useState({});

	const handleClick = (event) => {
		event.preventDefault();

		if (currentStep == 1) {
			let firstname = document.querySelector("#firstname").value;
			let lastname = document.querySelector("#lastname").value;
			let email = document.querySelector("#email").value;
			let password = document.querySelector("#password").value;
			let password_confirmation = document.querySelector("#password_confirmation").value;
			
			setUserDatas({ ...userDatas, firstanme: firstname, lastname: lastname, email: email, password: password, password_confirmation: password_confirmation })
			setCurrentStep(2);
		} else {
			setCurrentStep(1);
		}
	}

	const handleAccountChoice = (value) => {
		setAccountType(value)
		Array.from(document.querySelectorAll(".checkbox-card")).map((e) => e.classList.remove('selected'));

		document.querySelector(`#${value}`).classList.add('selected');
	}

	useEffect(() => {

		setUserDatas({ ...userDatas, accountType: accountType });

	}, [accountType])

	return (
		<div className="container d-flex flex-column justify-content-center" style={{ minHeight: "95vh" }}>

			<div className="row col-12 border-0 p-0 ">

				<div className="col-6 p-0 d-none d-lg-block border-neumorphic border-rounded" style={{ height: "75vh" }}>


					<img src={signupImage} alt="signin image" className="h-100 w-100 border-rounded m-0 p-0" />


				</div>

				<div className="col-lg-5 offset-lg-1 col-12 border-neumorphic bg-white p-4 d-flex flex-column justify-content-around border-rounded" style={{ height: "75vh" }}>


					{
						currentStep == 2 && (

							<svg onClick={(event)=>{handleClick(event)}} id="pevious-step" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.3944 29.5056L16.8088 31.0911C16.1375 31.7625 15.0519 31.7625 14.3877 31.0911L0.503515 17.2141C-0.167838 16.5428 -0.167838 15.4572 0.503515 14.793L14.3877 0.908789C15.059 0.237435 16.1446 0.237435 16.8088 0.908789L18.3944 2.49433C19.0729 3.17282 19.0586 4.27984 18.3658 4.94405L9.75963 13.1431H30.2859C31.2358 13.1431 32 13.9073 32 14.8572V17.1427C32 18.0926 31.2358 18.8568 30.2859 18.8568H9.75963L18.3658 27.0559C19.0657 27.7201 19.08 28.8271 18.3944 29.5056Z" fill="black" />
							</svg>


						)
					}
					<form action="">


						<h1>INSCRIPTION</h1>

						<div className="row d-flex flex-wrap my-4">
							<div className="col-8 d-flex align-item-center">

								{
									currentStep == 1 ? (
										<h5>Informations de connexion</h5>
									) : (
											<h5>Type de compte </h5>
										)
								}

							</div>
							<div className="col-4 d-flex align-item-center">
								<span className="w-100 text-right">{currentStep}/2</span>
							</div>
						</div>

						{
							currentStep == 1 ? (

								<>

									<div className="form-group">

										<label htmlFor="">Prénom</label>

										<input type="text" className="form-control" name="firstname" id="firstname" />


									</div>


									<div className="form-group">

										<label htmlFor="">Nom</label>

										<input type="text" className="form-control" name="lastname" id="lastname" />


									</div>


									<div className="form-group">

										<label htmlFor="">Adresse email:</label>

										<input type="text" className="form-control" name="email" id="email" />


									</div>


									<div className="form-group">

										<label htmlFor="">Mot de passe:</label>

										<input type="text" className="form-control" name="password" id="password" />


									</div>

									<div className="form-group">

										<label htmlFor="">Confirmer le mot de passe:</label>

										<input type="text" className="form-control" name="password_confirmation" id="password_confirmation" />


									</div>


									<button className="btn btn-scheme-2 btn-lg col-12 my-4" type="submit" onClick={(event) => handleClick(event)}>VALIDER</button>


								</>



							) :
								(
									<>

										<div className="btn btn-lg col-12 my-4 bg-white btn-scheme checkbox-card" id="student" onClick={() => handleAccountChoice("student")}>
											<p>SALARIE</p>
										</div>

										<div className="btn btn-lg col-12 my-4 bg-white btn-scheme checkbox-card" id="admin" onClick={(event) => handleAccountChoice("admin")}>
											<p>ADMINISTRATEUR</p>
										</div>

										<div className="btn btn-lg col-12 my-4 bg-white btn-scheme checkbox-card" id="teacher" onClick={(event) => handleAccountChoice("teacher")}>
											<p>FORMATEUR</p>
										</div>



									</>


								)
						}


					</form>

				</div>


			</div>


		</div>
	);
};

export default Signup;
