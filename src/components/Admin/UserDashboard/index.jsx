import React, { useState, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import TickIcon from "../../../assets/icons/acc-den-tick.svg";
import TrashIcon from "../../../assets/icons/trash.svg";
import API_REQUEST from '../../../services/ApiRequest/ApiRequest';

const UserDashboard = () => {
	
	//STATES
	const [show, setShow] = useState(false);
	const [users, setUsers] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		handleUsers();
	}, [])

	const handleUsers = async () => {
	
		// request to /users
		const response = await API_REQUEST.find("/users");
		setUsers(response);
	}

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Prénom</th>
						<th scope="col">Nom</th>
						<th scope="col">Age</th>
						<th scope="col">Email</th>
						<th scope="col">Rôle</th>
						<th scope="col">Accepté</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{ users.map((user) => (
						<tr>
							<th scope="row">{user.id}</th>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.age}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
							<td>{user.is_validated}</td>
							<td>
								<a href="#">
									<img
										src={TrashIcon}
										alt="Delete a user"
										width="25"
										height="25"
									/>
								</a>
							</td>
							<td>
								<a href="#">
									<img
										src={TickIcon}
										alt="Accept or refuse user"
										width="25"
										height="25"
										onClick={handleShow}
									/>
								</a>
							</td>
						</tr>	
					))}
				</tbody>
			</table>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
					<Modal.Title>Nom</Modal.Title>
					</Modal.Header>
					<Modal.Body>Valider ou refuser cet utilisateur</Modal.Body>
					<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						Valider
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Refuser
					</Button>
					</Modal.Footer>
				</Modal>

		</div>
	);
};

export default UserDashboard;

