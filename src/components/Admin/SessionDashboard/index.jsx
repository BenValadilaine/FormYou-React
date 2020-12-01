import React from "react";
import AddIcon from "../../../assets/icons/plus.svg";
import EditIcon from "../../../assets/icons/edit.svg";

const SessionDashboard = () => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">id</th>
						<th scope="col">Formation</th>
						<th scope="col">Capacité</th>
						<th scope="col">Salle</th>
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
						<td>23</td>
						<td>React.Js</td>
						<td>25 personnes</td>
						<td>420 Portique</td>
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

export default SessionDashboard;
