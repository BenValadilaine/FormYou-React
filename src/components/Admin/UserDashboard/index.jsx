import React from "react";
// import { FormattedMessage } from 'react-intl';

const UserDashboard = () => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Prénom</th>
						<th scope="col">Nom</th>
						<th scope="col">Email</th>
						<th scope="col">Rôle</th>
						<th scope="col">Accepté</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Fli</td>
						<td>Bustier</td>
						<td>flibustier@yopmail.com</td>
						<td>Admin</td>
						<td>Oui</td>
						<td>
							<button className="btn btn-info">test</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default UserDashboard;
