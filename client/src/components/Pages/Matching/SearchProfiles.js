import React, { Component } from "react";

import Service from "../../../service/matches.service"
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard"

class SearchProfiles extends Component {
  constructor() {
    super();
    this.service = new Service()
    this.state = {
        user: []
    };
  }

  componentDidMount = () => this.updateProfileList()

    updateProfileList = () => {
        this.service.getAllProfiles()
            .then(allProfiles => this.setState({ user: allProfiles.data }))
            .catch(err => console.log("Error", err))
    }
    
  render() {
    return (
       <section>

                <Container>

                    <h1>All profiles that match your preferences</h1>

                    <Row>
                        {this.state.user.map(user => <ProfileCard loggedInUser={this.props.loggedInUser} key={user._id} {...user} />)}
                    </Row>
                </Container>
                </section>
    );
  }
}
export default SearchProfiles;
