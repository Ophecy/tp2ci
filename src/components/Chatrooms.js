import React, { Component } from "react";

class Chatrooms extends Component {
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
		this._fetchChatrooms();
	}

	_fetchChatrooms = () => {
		for (const serverUrl of this.state.servers) {
			fetch(serverUrl)
				.then(res => res.json())
				.then(json => {
					let chatroomsList = this.state.chatroomsList;
					let chatroomsModif = [...chatroomsList, json];
					this.setState({ chatroomsList: chatroomsModif });
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

	_getChatroomsCount() {
		const { chatroomsList } = this.state;
		let nbChatrooms = 0;
		for (const chatrooms of chatroomsList) {
			nbChatrooms += chatrooms.length;
		}
		return nbChatrooms;
	}

	render() {
		return (
			<div className="col-3 p-3">
				<div className="card bg-white p-2">
					<p className="text-primary font-weight-bold text-left">Chatrooms</p>
					<h1 className="text-left">{this._getChatroomsCount()}</h1>
					<p className="text-secondary">On servers: </p>
					{this._getServerList()}
				</div>
			</div>
		);
	}
}

export default Chatrooms;
