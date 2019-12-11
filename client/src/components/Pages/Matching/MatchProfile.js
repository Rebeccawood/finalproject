import React, { Component } from 'react'
import Service from '../../../service/profile.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// ---------------------- COMPONENTS -------------------------//
import ConditionsTeacher from "../Profile/ConditionsTeacher";
import HobbiesPrice from "../Profile/HobbiesPrice";
import Availability from "../Profile/Availability"
import LearnTeachLanguages from "../Profile/LearnTeachLanguages.js";
import SpokenQualifications from "../Profile/SpokenQualifications";
import GeneralInfo from "../Profile/GeneralInfo"


class MatchProfile extends Component {

    constructor(props) {
        super(props)
        this.state = { user: {} }
        this.service = new Service()
    }


    componentDidMount = () => {
        const userId = this.props.match.params.id
        this.service.getOneUser(userId)
            .then(theUser => this.setState({ user: theUser.data }))
            .catch(err => console.log(err))
    }



    render() {
        return (
                    <Container>
                        <h1> Hi, {this.state.user.username}</h1>
                        <Row>
                            <Col md={6}>
                                <GeneralInfo
                                    setUser={this.state.user.setUser}
                                    loggedInUser={this.state.user.loggedInUser}
                                />
                            </Col>

                            <Col md={6}>
                        <Availability user={this.state.user} loggedInUser={this.props.loggedInUser}/>
                        <LearnTeachLanguages user={this.state.user} loggedInUser={this.props.loggedInUser} />
                                <SpokenQualifications user={this.state.user} loggedInUser={this.props.loggedInUser} />
                        <HobbiesPrice user={this.state.user} loggedInUser={this.props.loggedInUser}/>
                        <ConditionsTeacher loggedInUser={this.state.user} loggedInUser={this.props.loggedInUser}/>
                            </Col>
                        </Row>
                    </Container>


        )}}
export default MatchProfile