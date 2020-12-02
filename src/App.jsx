import React from "react";
import "./assets/scss/main.scss";
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
import FormationsPage from "./pages/Formations";
import FormationPage from "./pages/Formation";
import Admin from './pages/Admin';


const App = () => {

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
		<div className="App">
			<Router>
				<Navbar />
				<section className="page">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/formations">
							<FormationsPage />
						</Route>
						<Route exact path="/formation/:id">
							<FormationPage />
						</Route>
						<UnAuthRoute path="/signin" component={SigninPage} />
						<UnAuthRoute path="/signup" component={SignupPage} />
						<Profile />
						<AuthRoute path="/profile" component={Profile} />
						<UnAuthRoute path="/admin" component={Admin} />
					</Switch>
				</section>
			</Router>
		</div>
	);
};

export default App;
