import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.scss";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<Link to="/" className="navbar-brand" id="nav-brand" title="home">
				FormYou
			</Link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto mr-auto">
					<li className="nav-item">
						<Link to="/lessons" className="nav-link">
							Les formations
						</Link>
					</li>
					{
						//toogle off if connected
						<li className="nav-item">
							<Link to="/signup" className="nav-link">
								Nous rejoindre
							</Link>
						</li>
					}
					<li className="nav-item">
						<Link to="/contact" className="nav-link">
							Nous contacter
						</Link>
					</li>
				</ul>

				<ul className="navbar-nav flex mr-5" id="nav-connect">
					{
						// toogle off if connected
						<li className="nav-item">
							<Link to="/signin" className="nav-link">
								Se connecter
							</Link>
						</li>
					}

					{
						// toogle on if connected
						<li className="nav-item">
							<Link to="/profil" className="nav-link">
								Mon Profil
							</Link>
						</li>
					}
					{
						// toogle on if connected / make of it an "onclick" button that targets a logout function
						<li className="nav-item">
							<a href="#" className="nav-link">
								Se déconnecter
							</a>
						</li>
					}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
