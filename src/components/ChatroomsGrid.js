import React, { Component } from "react";

class ChatroomGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatroomsList: [],
			servers: [
				"http://a2berranger.alwaysdata.net/tp2/1/chatrooms",
				"http://a2berranger.alwaysdata.net/tp2/2/chatrooms",
			],
		};
	}

	componentDidMount() {
		this._fetchUsers();
	}

	_fetchUsers = () => {
		for (const serverUrl of this.state.servers) {
			fetch(serverUrl)
				.then((res) => res.json())
				.then((json) => {
					let chatroomsList = this.state.chatroomsList;
					let chatroomsModif = [...chatroomsList, json];
					this.setState({ chatroomsList: chatroomsModif });
				});
		}
	};

	render() {
		const chatroomsList = this.state.chatroomsList;
		const rows = Object.keys(chatroomsList).map((element, index) =>
			Object.keys(chatroomsList[element]).map((element2, index2) => (
				<tr key={element2}>
					<td>{this.state.servers[index]}</td>
					<td>{chatroomsList[element][element2]}</td>
				</tr>
			))
		);
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Chatroom</h5>
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">Server</th>
								<th scope="col">Chatroom</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ChatroomGrid;
