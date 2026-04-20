import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class logout extends Component {
  logout() {
    cookies.removeitem("email");
    cookies.removeItem("password");
  }

  render() {
    return (
        <button onClick={() => this.logout()}>Log out</button>
    );
  }
}

export default logout;