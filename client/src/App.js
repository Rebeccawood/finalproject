import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Service from "./service/auth.service";
import io from "socket.io-client";

//-------------Stylesheets ----------//
import "./styelsheets/App.css";

//------------- Page Components ----------//
import Home from "./components/pages/Home";
import Profile from "./components/pages/profile/Profile";
import Dashboard from "./components/pages/Dashboard";
import SearchProfiles from "./components/pages/matching/SearchProfiles";
import MatchProfile from "./components/pages/matching/MatchProfile";
import TeacherProfiles from "./components/pages/matching/TeachersProfiles";

//------------- Chat Components ----------//
import MessagesView from "./components/chat/MessagesView"
import Chat from "./components/chat/Chat";

//------------- UI Components ----------//
import Navigation from "./components/ui/NavbarHome";

// ----------------------------------------------------------------------------- //

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: null, 
      socketList: [] };

  //  this.socket = io("http://localhost/:5000/chat");
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
        .then(user => {
          this.setState({ loggedInUser: user.data }, () => {});
        })
        .catch(err => {
          this.setState({ loggedInUser: false });
          console.log({ err });
        });
    }
  };

  render() {
    this.fetchUser();

    return (
      <>
        <Navigation
          loggedInUser={this.state.loggedInUser}
          setUser={this.setTheUser}
        />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/profile"
            render={() =>
              this.state.loggedInUser ? (
                <Profile
                  setUser={this.setTheUser}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <Dashboard
                loggedInUser={this.state.loggedInUser}
                setUser={this.setTheUser}
              />
            )}
          />

          <Route
            exact
            path="/profile/:id"
            render={match => (
              <MatchProfile
                loggedInUser={this.state.loggedInUser}
                setUser={this.setTheUser}
                {...match}
              />
            )}
          />
          <Route
            exact
            path="/teachers"
            render={() =>
              this.state.loggedInUser ? (
                <TeacherProfiles user={this.state.loggedInUser} />
              ) : (
                <Redirect to="/" />
              )
            }
          />

          <Route
            exact
            path="/search"
            render={() =>
              this.state.loggedInUser ? (
                <SearchProfiles loggedInUser={this.state.loggedInUser} />
              ) : (
                <Redirect to="/" />
              )
            }
          />

          {/* <Route exact path="/messages" socket={this.state.socket} loggedInUser={this.state.loggedInUser} component={MessagesView} />
          <Route exact path="/chat" socket={this.state.socket} user={this.state.loggedInUser} component={Chat} /> */}
        </Switch>
      </>
    );
  }
}

export default App;
