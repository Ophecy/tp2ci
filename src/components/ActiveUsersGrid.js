import React, { Component } from "react";

class ActiveUsersGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersList: [],
			servers: [
				"http://a2berranger.alwaysdata.net/tp2/1/users",
				"http://a2berranger.alwaysdata.net/tp2/2/users",
			],
		};
	}

	componentDidMount() {
		this._fetchUsers();
	}

	_fetchUsers = () => {
		for (const serverUrl of this.state.servers) {
			fetch(serverUrl)
				.then(res => res.json())
				.then(json => {
					let usersList = this.state.usersList;
					let usersModiff = [...usersList, json];
					this.setState({
						usersList: usersModiff,
					});
				});
		}
	};

	_generateRows() {
		const { usersList } = this.state;
		const rows = usersList.map(users =>
			Object.keys(users).map(element => (
				<tr key={element}>
					<th scope="row">{users[element].account.id}</th>
					<td>serveur</td>
					<td>{users[element].account.username}</td>
					<td>{users[element].currentStatus}</td>
				</tr>
			))
		);
		return rows;
	}

	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Users</h5>
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">id</th>
								<th scope="col">Server</th>
								<th scope="col">Username</th>
								<th scope="col">Active</th>
							</tr>
						</thead>
						<tbody>{this._generateRows()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ActiveUsersGrid;
