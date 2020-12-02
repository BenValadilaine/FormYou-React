import React, { useState, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import TickIcon from "../../../assets/icons/acc-den-tick.svg";
import TrashIcon from "../../../assets/icons/trash.svg";
import API_REQUEST from '../../../services/ApiRequest/ApiRequest';
import Cookies from "js-cookie";

const UserDashboard = () => {
	
	//STATES
	const [show, setShow] = useState(false);
	const [users, setUsers] = useState([]);
	const [userSelected, setUserSelected] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = (user) => {
		setUserSelected(user)
		setShow(true);
	}

	useEffect(() => {
		handleUsers();
	}, [])

	const handleUsers = async () => {
	
		// request to /users
		const response = await API_REQUEST.find("/users");
		setUsers(response);
	}

	const editUserStatus = async (status) => {

		//request to PUT /users
		const response = await API_REQUEST.update(
			{
				user: {
					is_validated: status
				}
			},
			`/users/${userSelected.id}`,
			true,
			Cookies.get("jwt_token")
			);

		handleClose()
	}
 	 /*
	async update(datas, endpoint, authenticated = true, jwt_token = null) {
        this.endpoint = this.base_url + endpoint;
        let response = await this.request("PUT", datas, authenticated, jwt_token)
        return response;
	}
	*/
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
										onClick={() => handleShow(user)}
									/>
								</a>
							</td>
						</tr>	
					))}
				</tbody>
			</table>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
					<Modal.Title>{`${userSelected.first_name} ${userSelected.last_name}`}</Modal.Title>
					</Modal.Header>
					<Modal.Body>Mettre à jour le statut de cet utilisateur</Modal.Body>
					<Modal.Footer>
					<Button variant="success" onClick={() => editUserStatus(true)}>
						Valider
					</Button>
					<Button variant="danger" onClick={() => editUserStatus(false)}>
						Refuser
					</Button>
					</Modal.Footer>
				</Modal>

		</div>
	);
};

export default UserDashboard;

