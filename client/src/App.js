import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Service from "./service/auth.service";

//-------------Stylesheets ----------//
import "./styelsheets/App.css";

//------------- Page Components ----------//
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile/Profile";
import Dashboard from "./components/Pages/Dashboard"

//------------- UI Components ----------//
import Navigation from "./components/UI/Navbar";

// ----------------------------------------------------------------------------- //

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new Service();
  }
  // --------------------- USER CONFIG ------------------------ //
  setTheUser = user => {
    this.setState({ loggedInUser: user });
    console.log("the logged in user is:", this.state.loggedInUser);
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(user => this.setState({ loggedInUser: user.data }))
        .catch(err => {
          this.setState({ loggedInUser: false });
          console.log({ err });
        });
    }
  };

  // --------------------- RETURN ------------------------ //
  render() {
    this.fetchUser();
    return (
      <>
        <Navigation
          loggedInUser={this.state.loggedInUser}
          setUser={this.setTheUser}
        />

        <Switch>
          <Route
            path="/profile"
            render={() =>
              this.state.loggedInUser ? (
                <Profile loggedInUser={this.state.loggedInUser} />
              ) : (
                <Redirect to="/" />
              )
            }
          />

          <Route exact path="/" component={Home} />
          <Dashboard
            loggedInUser={this.state.loggedInUser}
            setUser={this.setTheUser}
          />
        </Switch>
      </>
    );
  }
}

export default App;
