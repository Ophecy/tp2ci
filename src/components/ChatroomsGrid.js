import React, { Component } from "react";

class ChatroomGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: [],
    };
  }

  componentDidMount() {
    this._fetchUsers();
  }

  _fetchUsers = () => {
    fetch("http://a2berranger.alwaysdata.net/tp2/index.php")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          chatrooms: json.chatrooms,
        });
      });
  };

  render() {
    const chatrooms = this.state.chatrooms;
    const rows = Object.keys(chatrooms).map((element, index) => (
      <tr key={element}>
        <th scope="row">{index}</th>
        <td>serveur</td>
        <td>{chatrooms[element]}</td>
      </tr>
    ));
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Chatroom</h5>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
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
