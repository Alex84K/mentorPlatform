import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Header() {

    function goMain() {
        window.location.assign('http://localhost:3000/');
    }

    return (
        <div className=''>
            <Navbar expand="lg" className=" text-success">
                <Container>
                    <img src="../img/logo54.svg" alt="logo" className="logoS logoMain logo" href="#home" onClick={goMain}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Link to="/" className="ms-4 txt-dec-none txt_color_green">Home</Link>
                            <Link to="/blogAll" className="ms-4 txt-dec-none txt_color_green">Our blog</Link>
                            <Link to="/teacher" className="ms-4 txt-dec-none txt_color_green">Become a teachers</Link>
                            <Link to="/donat" className="ms-4 txt-dec-none txt_color_green">Donations</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>

    );
}

export default Header;

