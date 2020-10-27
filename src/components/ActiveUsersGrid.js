import React, { Component } from "react";

class ActiveUsersGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
          users: json.users.filter((u) => u.currentStatus === "ACTIVE"),
        });
      });
  };

  render() {
    const users = this.state.users;
    const rows = Object.keys(users).map((element) => (
      <tr key={element}>
        <th scope="row">{users[element].account.id}</th>
        <td>serveur</td>
        <td>{users[element].account.username}</td>
      </tr>
    ));
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
