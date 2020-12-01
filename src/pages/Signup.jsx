import React from "react";
import SignupForm from "../components/Forms/SignupForm";
// import { FormattedMessage } from 'react-intl';

const Signup = () => {
	return (
		<div className="register-page">
			<h1>Sign up</h1>
			<SignupForm />
		</div>
	);
};

export default Signup;
