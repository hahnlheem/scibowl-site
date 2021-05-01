import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  hello() {
    alert("YEEHAW");
  }

  render() {
    return (
      <>
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
        <h1>give me all ur UWUWUWUWUWUWUWWUWUUWUWUWUWU</h1>
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
          <button onClick={this.hello}> 
            this button is trying to access the hello() function but it's not working -_-
          </button>
          
        </ul>
        <Link to="/testy">goes to testy?</Link>
      </>
    );
  }
}

export default Skeleton;
