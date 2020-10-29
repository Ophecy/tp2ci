import React, { Component } from "react";

class Chatrooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: [],
    };
  }

  componentDidMount() {
    this._fetchChatrooms();
  }

  _fetchChatrooms = () => {
    fetch("http://a2berranger.alwaysdata.net/tp2/index.php")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ chatrooms: json.chatrooms });
      });
  };

  render() {
    const { chatrooms } = this.state;
    const server = window.location.origin;

    return (
      <div className="col-3 p-3">
        <div className="card bg-white p-2">
          <p className="text-primary font-weight-bold text-left">Chatrooms</p>
          <h1 className="text-left">{chatrooms.length}</h1>
          <p className="text-secondary">On servers: </p>
          <p className="text-info">{server}</p>
        </div>
      </div>
    );
  }
}

export default Chatrooms;
