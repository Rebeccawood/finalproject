import React, { Component } from 'react'
import Service from '../../../service/profile.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// ---------------------- COMPONENTS -------------------------//
import ConditionsTeacher from "../Profile/ConditionsTeacher";
import Hobbies from "../Profile/Hobbies";
import Price from "../Profile/Price";
import Availability from "../Profile/Availability"
import LearningLanguages from "../Profile/LearningLanguages.js";
import TeachingLanguages from "../Profile/TeachingLanguages.js";
import Qualifications from "../Profile/Qualifications";
import SpokenLanguages from "../Profile/SpokenLanguages";
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
            <>
                    <Container>
                        <h1>{this.state.user.username}</h1>
                        <Row>
                            <Col md={6}>
                                <GeneralInfo
                                    setUser={this.state.user}
                                    user={this.props.user}
                                />
                            </Col>

                        <Col md={6}>

                            <Availability user={this.props.user} />

                            {this.user.buddy ?
                                (<LearningLanguages user={this.props.user} />) : (<TeachingLanguages user={this.props.user} />)}

                            {this.user.buddy ?
                                (<SpokenLanguages user={this.props.user} />) : (<Qualifications user={this.props.user} />)}

                            {this.user.buddy ?
                                (<Hobbies user={this.props.user} />) :
                                (<Price user={this.props.user} />)}

                            {this.user.teacher && <ConditionsTeacher user={this.props.user} />}

                        </Col>
                        </Row>
                    </Container>
</>

        )}}
export default MatchProfile