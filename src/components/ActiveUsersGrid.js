import React, { Component } from "react";

class ActiveUsersGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      servers: [
        "http://a2berranger.alwaysdata.net/tp2/index.php",
        "http://a2berranger.alwaysdata.net/tp2/index2.php",
      ],
    };
  }

  componentDidMount() {
    this._fetchUsers();
  }

  _fetchUsers = () => {
    for (const e of this.state.servers) {
      fetch(e)
        .then((res) => res.json())
        .then((json) => {
          let allUsers = this.state.allUsers;
          let usersModiff = [...allUsers, json.users];
          this.setState({
            allUsers: usersModiff,
          });
        });
    }
  };

  render() {
    const allUsers = this.state.allUsers;
    const rows = allUsers.map((users) =>
      Object.keys(users).map((element) => (
        <tr key={element}>
          <th scope="row">{users[element].account.id}</th>
          <td>serveur</td>
          <td>{users[element].account.username}</td>
          <td>{users[element].currentStatus}</td>
        </tr>
      ))
    );
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
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ActiveUsersGrid;
