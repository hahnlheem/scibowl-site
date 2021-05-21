import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { get } from "../../utilities";
import { Link } from "@reach/router";

import "../../utilities.css";

const GOOGLE_CLIENT_ID = "738182777388-hs65jinmb9l3bu27r2c9gcjt2gbpb7fh.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    this.state = { }; // empty to allow user to be added later
  }

  componentDidMount() {
    document.title = "Home Page";
    get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));
  }

  hello() {
    alert("YEEHAW");
  }

  render() {
    return (
      <div>
        {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )}
        <h1>Welcome {this.state.user ? this.state.user.name + "!" : "-- please log in!"}</h1>
        <div className="std-blue">
          <h2>Things to do!</h2>

          <h2>asdf</h2>
          <ul>
            <li>Figure out how to actually make <code>hotloader</code> work (seems like some issues with auth servers?)</li>
            <ul>
              <li>Edit: jk seems to work now? But still need to do bottom two</li>
              <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
              <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
            </ul>
            <li>Implement a timer</li>
            <li>Style things along the way</li>
            <li>Make + add a favicon at the path client/dist/favicon.ico</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skeleton;
