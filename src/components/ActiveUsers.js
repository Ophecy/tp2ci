import React, { Component } from "react";

class ActiveUsers extends Component {
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
					let usersModiff = [
						...this.state.usersList,
						json.filter(u => u.currentStatus === "ACTIVE"),
					];
					this.setState({
						usersList: usersModiff,
					});
				});
		}
	};

	_getServerList() {
		const { servers } = this.state;

		return Object.keys(servers).map(server => (
			<p className="text-info" key={server}>
				{servers[server]}
			</p>
		));
	}

	_getUsersCount() {
		const { usersList } = this.state;
		let nbUsers = 0;
		for (const users of usersList) {
			nbUsers += users.length;
		}
		return nbUsers;
	}

	render() {
		return (
			<div className="col-3 p-3">
				<div className="card bg-white p-2">
					<p className="text-primary font-weight-bold text-left">
						Active Users
					</p>
					<h1 className="text-left">{this._getUsersCount()}</h1>
					<p className="text-secondary">On servers: </p>
					{this._getServerList()}
				</div>
			</div>
		);
	}
}

export default ActiveUsers;
