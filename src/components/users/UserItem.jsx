import React, { Component } from "react";

class UserItem extends Component {
  render() {
      // access to props inherited from Users.jsx
      const {login, avatar_url, htm_url} = this.props.user
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "80px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={htm_url} className="btn btn-dark btn-md my-1">
              More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
