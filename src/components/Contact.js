import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Contact = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });

    };
    const postData = async (e) => {
        e.preventDefault();

        const { name, email, number, message } = user;



        const res = await fetch("https://contact-f73f9-default-rtdb.firebaseio.com/form.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                name,
                email,
                number,
                message,
            })
        });
        if (res) {
            setUser({
                name: "",
                email: "",
                number: "",
                message: "",
            });
            alert("Data stored successfully");
            history.push('/welcome')
        };


    }
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
            <div className="container my-3">
                <form method="POST">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input autoComplete="off" required placeholder="Enter your name" type="text" name="name" value={user.name} onChange={getUserData} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="text" autoComplete="off" name="email" placeholder="Enter your email" required class="form-control" value={user.email} onChange={getUserData} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                        <input type="number" autoComplete="off" name="number" placeholder="Enter your phone" required class="form-control" value={user.number} onChange={getUserData} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <textarea class="form-control" name="message" value={user.message} onChange={getUserData} placeholder="Leave a comment here" autoComplete="off" required id="floatingTextarea"></textarea>
                    </div>


                    <button type="submit" onClick={postData} class="btn btn-primary">Submit</button>
                </form>
            </div>
            <footer>
                <p>All Rights Reserved</p>
            </footer>

        </>
    )
}

export default Contact
