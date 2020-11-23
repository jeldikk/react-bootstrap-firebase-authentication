import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import SignIn from "../../components/sign-in/sign-in.component"

import "./home-page.styles.scss"

function HomePage() {
    return (
        <div class="homepage">
            <Container fluid="md">
           <Row>
               <Col xs={7}>
                   <div className="intro-text">
                       <div className="main-content text-danger">
                        React Redux Bootstrap Firebase Authentication
                       </div>
                       <div className="tag-content">
                           - A Test Demo Project
                       </div>
                   </div>
                </Col>
               <Col xs={5}>
                   <SignIn />
               </Col>
           </Row>
       </Container>
        </div>
       
    )
}

export default HomePage
