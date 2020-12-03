import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import API_REQUEST from "../../services/ApiRequest/ApiRequest";
import { API_ENDPOINTS } from "../../services/ApiRequest/config/config";
import "./index.scss";
import Cookies from "js-cookie";

const Navbar = () => {
	const [isConnected, setIsConnected] = useState(false);
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.current_user);

	const handleSignOut = async () => {
		if (Cookies.get("jwt_token")) {
			let response = await API_REQUEST.delete(
				API_ENDPOINTS["signout"],
				true,
				Cookies.get("jwt_token"),
			);
			Cookies.remove("jwt_token");
		}
	};

	useEffect(() => {

		if (currentUser) {
			setIsConnected(true)
		} else {
			if (Cookies.get("jwt_token")) {
				const payload = { Cookies.get("jwt_token") }
				dispatch({
					type: "SET_CURRENT_USER",
					payload
				});
			} else {
				setIsConnected(false)
			}
		}
		/*
		const isLogged = async () => {
			await dispatch
		}

		if (Cookies.get("jwt_token")) {
			setIsConnected(true)
		} else {
			setIsConnected(false)
		}*/
		console.log(Cookies.get("jwt_token"));
		console.log(isConnected);
		console.log(currentUser);
	}, [dispatch])

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<Link to="/" className="navbar-brand" id="nav-brand" title="home">
				FormYou
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto mr-auto">
					<li className="nav-item">
						<Link to="/formations" className="nav-link">
							Les formations
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contact" className="nav-link">
							Nous contacter
						</Link>
					</li>
				</ul>

				<ul className="navbar-nav flex mr-5" id="nav-connect">
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							Nous rejoindre
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/signin" className="nav-link">
							Se connecter
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/profile" className="nav-link">
							Mon Profil
						</Link>
					</li>

					<li className="nav-item">
						<a
							href="#"
							onClick={() => handleSignOut()}
							className="nav-link"
						>
							Se déconnecter
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
