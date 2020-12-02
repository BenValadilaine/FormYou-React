import React, { useState, useEffect} from "react";
import AddIcon from "../../../assets/icons/plus.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import API_REQUEST from '../../../services/ApiRequest/ApiRequest';
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";


const LessonsDashboard = () => {

	//STATES
	const [show, setShow] = useState(false);
	const [formations, setFormations] = useState([]);
	const [formationSelected, setFormationSelected] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = () =>  setShow(true);

	useEffect(() => {
		handleFormations();
	}, [show])

	const handleFormations = async () => {
	
		// request to /users
		const response = await API_REQUEST.find("/formations");
		setFormations(response);
	}

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nom</th>
						<th scope="col">Description</th>
						<th scope="col">Professeur</th>
						<th scope="col">Catégories</th>
						<th scope="col">Créée le</th>
						<th scope="col">
							<a href="#">
								<img src={AddIcon} alt="Ajouter" width="25" height="25" />
							</a>
						</th>
					</tr>
				</thead>
				<tbody>
					{ formations.map((formation) => (
						<tr>
							<th scope="row">{formation.id}</th>
							<td>{formation.name}</td>
							<td>{formation.description}</td>
							<td>{formation.teacher_id}</td>
							<td>Developpement web</td>
							<td>{formation.created_at}</td>
							<td>
								<a href="#">
									<img
										src={EditIcon}
										alt="Éditer"
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
				<Modal.Title>{`${formationSelected.first_name} ${formationSelected.last_name}`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>Mettre à jour le statut de cet utilisateur</Modal.Body>
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

export default LessonsDashboard;
