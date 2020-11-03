import React, { Component } from "react";

class Chatrooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: [],
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
        .then((res) => res.json())
        .then((json) => {
          let chatrooms = this.state.chatrooms;
          let chatroomsModif = [...chatrooms, json];
          this.setState({ chatrooms: chatroomsModif });
        });
    }
  };

  render() {
    const { chatrooms, servers } = this.state;
    let nbChatrooms = 0;
    for (const e of chatrooms) {
      nbChatrooms += e.length;
    }
    const serverList = Object.keys(servers).map((server) => (
      <p className="text-info" key={server}>
        {servers[server]}
      </p>
    ));

    return (
      <div className="col-3 p-3">
        <div className="card bg-white p-2">
          <p className="text-primary font-weight-bold text-left">Chatrooms</p>
          <h1 className="text-left">{nbChatrooms}</h1>
          <p className="text-secondary">On servers: </p>
          {serverList}
        </div>
      </div>
    );
  }
}

export default Chatrooms;
