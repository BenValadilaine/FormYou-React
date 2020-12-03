import React, { useContext } from "react";
import { parseDate } from "../../helpers/parseDate";
import { capitalize } from "../../helpers/string";
import API_REQUEST from "../../services/ApiRequest/ApiRequest";
import Cookies from "js-cookie";
import { API_ENDPOINTS } from "../../services/ApiRequest/config/config";
import isUserSignIn from "../../helpers/signActions";
import { Link, useHistory } from "react-router-dom";
import modalContext from "../../context/modalContext";

// TO SEE PORTAL

const ModalContentEvent = ({
	title,
	start,
	end,
	seatLeft,
	allDay,
	resource,
	...rest
}) => {
	const history = useHistory();

	// helper to for redirection redirect
	const redirect = (url) => {
		history.push(url);
	};

	const handleUserSubscription = async ({ formation_id, id }) => {
		if (isUserSignIn()) {
			const datas = {
				formation_attendance: {
					formation_id: `${formation_id}`,
					formation_session_id: `${id}`,
				},
			};
			const response = await API_REQUEST.create(
				datas,
				API_ENDPOINTS["formation_attendances"],
				true,
				Cookies.get("jwt_token"),
			);
			if (response.status === 201) {
				redirect("/profile");
			}
		} else {
			console.log("You have to be signed in to make this action");
		}
	};

	const { setModalIsOpen } = useContext(modalContext);

	return (
		<>
			<h2 className="text-center">{title && capitalize(title)}</h2>

			<h5>Date de début</h5>

			<h5>{start && parseDate(start)}</h5>

			<h5> Date de fin :</h5>

			<h5>{end && parseDate(end)}</h5>

			<h5>Nombre de place restante :</h5>

			<h5>{seatLeft && seatLeft}</h5>

			{isUserSignIn() ? (
				<div className="row">
					<button
						className="btn btn-scheme-2 btn-lg col-12 my-4"
						onClick={() => handleUserSubscription(resource)}
						type="submit"
					>
						JE PARTICIPE
					</button>
				</div>
			) : (
				<div className="row">
					<Link
						to="/signin"
						className="btn btn-scheme-2 btn-lg col-12 my-4"
						onClick={() => setModalIsOpen(false)}
					>
						SE CONNECTER
					</Link>
				</div>
			)}
		</>
	);
};

export default ModalContentEvent;
