import { React } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Container } from 'react-bootstrap'

export const NavBar = () => {

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Container>
                                <Navbar.Brand href="/"><h2>SANDEEP</h2></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>                                    
                                    <Nav.Link href="/education">Education</Nav.Link>
                                    <Nav.Link href="/work">Work</Nav.Link>
                                    <Nav.Link href="/github">Github</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                
                            </Container>
                            </Navbar>
                    </div>
                </div>
            </div>
        )
};