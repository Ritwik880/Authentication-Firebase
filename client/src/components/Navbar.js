import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../image/logo2.png";
import { Modal } from 'bootstrap';

// import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav-link" href="/signup">SignUp</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/signin">SignIn</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
           
        </>
    )
}

export default Navbar
