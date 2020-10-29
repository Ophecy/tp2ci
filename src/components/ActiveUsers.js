import React, { Component } from "react";

class ActiveUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
          let usersModiff = [
            ...this.state.users,
            json.users.filter((u) => u.currentStatus === "ACTIVE"),
          ];
          this.setState({
            users: usersModiff,
          });
        });
    }
  };

  render() {
    const { users } = this.state;
    const server = window.location.origin;
    let nbUsers = 0;
    for (const e of users) {
      nbUsers += e.length;
    }

    return (
      <div className="col-3 p-3">
        <div className="card bg-white p-2">
          <p className="text-primary font-weight-bold text-left">
            Active Users
          </p>
          <h1 className="text-left">{nbUsers}</h1>
          <p className="text-secondary">On servers: </p>
          <p className="text-info">{server}</p>
        </div>
      </div>
    );
  }
}

export default ActiveUsers;
