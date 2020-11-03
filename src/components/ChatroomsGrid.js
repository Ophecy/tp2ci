import React, { Component } from "react";

class ChatroomGrid extends Component {
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
    this._fetchUsers();
  }

  _fetchUsers = () => {
    for (const el of this.state.servers) {
      fetch(el)
        .then((res) => res.json())
        .then((json) => {
          let chatrooms = this.state.chatrooms;
          let chatroomsModif = [...chatrooms, json];
          this.setState({ chatrooms: chatroomsModif });
        });
    }
  };

  render() {
    const chatrooms = this.state.chatrooms;
    const rows = Object.keys(chatrooms).map((element, index) =>
      Object.keys(chatrooms[element]).map((element2, index2) => (
        <tr key={element2}>
          {/* <th scope="row">{index}</th> */}
          <td>{this.state.servers[index]}</td>
          <td>{chatrooms[element][element2]}</td>
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
                {/* <th scope="col">#</th> */}
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
