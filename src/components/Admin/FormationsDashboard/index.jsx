import React from "react";
import AddIcon from "../../../assets/icons/plus.svg";
import EditIcon from "../../../assets/icons/edit.svg";


const LessonsDashboard = () => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nom</th>
						<th scope="col">Description</th>
						<th scope="col">Professeur</th>
						<th scope="col">Catégorie</th>
						<th scope="col">Créée le</th>
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
						<td>React.Js</td>
						<td>
							React (aussi appelé React.js ou ReactJS) est une bibliothèque
							JavaScript libre développée par Facebook depuis 2013. Le but
							principal de cette bibliothèque est de faciliter la création
							d'application web monopage, via la création de composants
							dépendant d'un état et générant une page (ou portion) HTML à
							chaque changement d'état.
                        </td>
						<td>L'ami Paul</td>
<<<<<<< HEAD
						<td>Développement web</td>
=======
						<td>Developpement web</td>
>>>>>>> 35d749a554338991250272ec752652731a8b4754
						<td>18/12/2020</td>
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

export default LessonsDashboard;
