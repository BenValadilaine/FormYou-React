import React from "react";
import AddIcon from "../../../assets/icons/plus.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import TrashIcon from "../../../assets/icons/trash.svg";
import { Modal, Button } from "react-bootstrap";
import API_REQUEST from '../../../services/ApiRequest/ApiRequest';
import Cookies from "js-cookie";

const CategoryDashboard = () => {

		//STATES
		const [show, setShow] = useState(false);
		const [showCreateModal, setShowCreateModal] = useState(false);
		const [categories, setCategories] = useState([]);
		const [categorySelected, setCategorySelected] = useState({});

		const handleClose = () => {
			setCategorySelected({});
			setShow(false);
		}
	
		const handleCloseCreateModal = () => {
			setShowCreateModal(false);
		}
	
		const handleShow = (room) =>  {
			setCategorySelected(room);
			setShow(true);
		}
	
		const handleShowCreateModal = () =>  {
			setShowCreateModal(true);
		}
	
		const handleRooms = async () => {
		
			// request to /formations
			const response = await API_REQUEST.find("/rooms");
			setCategories(response);
		}
	
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">id</th>
						<th scope="col">Name</th>
						<th scope="col">
							<a href="#">
								<img src={AddIcon} alt="Ajouter" width="25" height="25" />
							</a>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>29</td>
						<td>Développement Web</td>
						<td>
							<a href="#">
								<img src={TrashIcon} alt="Ajouter" width="25" height="25" />
							</a>
						</td>
						<td>
							<a href="#">
								<img src={EditIcon} alt="Éditer" width="25" height="25" />
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CategoryDashboard;
