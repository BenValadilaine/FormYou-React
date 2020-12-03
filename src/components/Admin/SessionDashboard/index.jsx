import React, { useState, useEffect} from "react";
import AddIcon from "../../../assets/icons/plus.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import API_REQUEST from '../../../services/ApiRequest/ApiRequest';
import TrashIcon from "../../../assets/icons/trash.svg";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";

const SessionDashboard = () => {

	//STATES
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [sessions, setSessions] = useState([]);
	const [sessionSelected, setSessionSelected] = useState({});
	const [formations, setFormations] = useState([]);
	const [rooms, setRooms] = useState([]);


	const handleCloseCreateModal = () => {
		setShowCreateModal(false);
	}

	const handleShowCreateModal = () =>  {
		setShowCreateModal(true);
	}

	const handleRooms = async () => {
		// request to /rooms
		const response = await API_REQUEST.find("/rooms");
		setRooms(response);
	}

	const handleSessions = (formations) => {
		const allSessions = [];
		formations.forEach(async (formation) => {
			const response = await API_REQUEST.find(`/formations/${formation.id}/formation_sessions`)
			response.forEach((session) => {
				allSessions.push(session)
			})
		})
		setSessions(allSessions);
	}


	const handleFormations = async () => {
	
		// request to /formations
		const response = await API_REQUEST.find("/formations");
		setFormations(response);
		handleSessions(response);

	}


	useEffect(() => {
		handleFormations();
		handleRooms();
	}, [showCreateModal])

	useEffect(() => {
		console.log(sessions)
	}, [sessions])


	const createSession = async (event) => {

		event.preventDefault();
		const form = event.currentTarget;
		const formdata = new FormData(form);

		const name = formdata.get("session-name");
		const start_date = formdata.get("start-date");
		const end_date = formdata.get("end-date");
		const formation_id = formdata.get("formation-select");
		const room_id = formdata.get("room-select");
		const capacity = formdata.get("capacity");
		
		//request to POST /formations
		const response = await API_REQUEST.create(
			{
				formation_session: {
					start_date: start_date,
					end_date: end_date,
					capacity: capacity,
					room_id: room_id
				}
			},
			`/formations/${formation_id}/formation_sessions`,
			true,
			Cookies.get("jwt_token")
		)

		handleCloseCreateModal();

	}


	const deleteSession = async (session) => {
	
		//request to DELETE /sessions
		const response = await API_REQUEST.delete(
			`/formations/${session.formation_id}/formation_sessions/${session.id}`,
			true,
			Cookies.get("jwt_token")
			);

		handleSessions()
	}

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nom de la session</th>
						<th scope="col">Formation id</th>
						<th scope="col">Capacité</th>
						<th scope="col">Salle id</th>
						<th scope="col">
							<a href="#">
								<img
									src={AddIcon}
									alt="Ajouter"
									width="25"
									height="25"
									onClick={handleShowCreateModal}
								/>
							</a>
						</th>
					</tr>
				</thead>
				<tbody>
					{ sessions && sessions.map((session) => (
						<tr>
							<td>{session.id}</td>
							<td>{session.name}</td>
							<td>{session.formation_id}</td>
							<td>{session.capacity} places</td>
							<td>{session.room_id}</td>
							<td>
								<a href="#">
									<img
										src={TrashIcon}
										alt="Delete a formation"
										width="25"
										height="25"
										onClick={() => deleteSession(session)}
									/>
								</a>
							</td>
						</tr>
					))
					}
				</tbody>
			</table>

			<Modal show={showCreateModal} onHide={handleCloseCreateModal}>
				<Modal.Header closeButton>
				<Modal.Title>Créer une session</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={createSession}>
						
						<input name="session-name" type="text" placeholder="Nom de la session" /><br />
						<input name="start-date" type="datetime-local" placeholder="Date de début" /><br />
						<input name="end-date" type="datetime-local" placeholder="Date de fin" /><br />
						<input name="capacity" type="number" placeholder="Capacité" /><br />

						<select name="formation-select">
							{
									formations.map((formation) => (
										<option value={formation.id}>{formation.title}</option>
									))
							}
						</select><br />
						<select name="room-select">
							{
									rooms.map((room) => (
										<option value={room.id}>{room.name}</option>
									))
							}
						</select><br />
						<hr />  
						<Button variant="success" type="submit">
							Valider
						</Button>
						<Button variant="secondary" onClick={handleCloseCreateModal}>
							Annuler
						</Button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default SessionDashboard;
