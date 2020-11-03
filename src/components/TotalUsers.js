import React, { Component } from "react";

class TotalUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
    for (const e of this.state.servers) {
      fetch(e)
        .then((res) => res.json())
        .then((json) => {
          const users = this.state.users;
          let usersModiff = [...users, json];
          this.setState({
            users: usersModiff,
          });
        });
    }
  };

  render() {
    const { users } = this.state;
    let nbUsers = 0;
    for (const e of users) {
      nbUsers += e.length;
    }
    return (
      <div className="col-3 p-3">
        <div className="card bg-white p-2">
          <p className="text-primary font-weight-bold text-left">Total Users</p>
          <h1 className="text-left">{nbUsers}</h1>
        </div>
      </div>
    );
  }
}

export default TotalUsers;
