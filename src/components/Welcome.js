import React from 'react'
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Welcome = () => {
    return (
        <>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">F-Auth</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Hello User!</h1>
                    <p class="para col-md-8 fs-4">We are so glad that you have passed our signup verification.</p>
                    <button class="btn btn-primary btn-lg" type="button">Great</button>
                </div>
            </div>
            <footer>
                <p>All Rights Reserved</p>
            </footer>

        </>
    )
}

export default Welcome
