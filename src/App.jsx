import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";
import Profile from "./pages/Profile";

/* ===== INTL ========
import { IntlProvider } from 'react-intl';
import textFr from './translation/fr';
import textEn from './translation/en';

const text = {
  fr: textFr,
  en: textEn,
}
*/

const App = () => {
	/* === INTL ===
  const [language, setLanguage] = useState('fr');
  */

	const checkAuth = () => {
		return false;
	};

	//Private routes who do not need authentification
	const UnAuthRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				checkAuth() ? (
					<Redirect to={{ pathname: "/" }} />
				) : (
						<Component {...props} />
					)
			}
		/>
	);

	//Private routes who do need authentification
	const AuthRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				checkAuth() ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);

	return (
		// <IntlProvider locale={language} messages={text[language]}>
		<div className="App">
			<Router>
				<Navbar />
				<section className="page">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<UnAuthRoute path="/signin" component={SigninPage} />
						<UnAuthRoute path="/signup" component={SignupPage} />
						<AuthRoute path="/profile" component={Profile} />
					</Switch>
				</section>
			</Router>
		</div>
		// </ IntlProvider>
	);
};

export default App;
