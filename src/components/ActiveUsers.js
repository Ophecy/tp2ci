import React, { Component } from "react";

class ActiveUsers extends Component {
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
          let usersModiff = [
            ...this.state.users,
            json.filter((u) => u.currentStatus === "ACTIVE"),
          ];
          this.setState({
            users: usersModiff,
          });
        });
    }
  };

  render() {
    const { users, servers } = this.state;
    const serverlist = Object.keys(servers).map((server) => (
      <p className="text-info" key={server}>
        {servers[server]}
      </p>
    ));
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
          {serverlist}
        </div>
      </div>
    );
  }
}

export default ActiveUsers;
