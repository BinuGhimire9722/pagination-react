import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import routes from "../routes/routes"
function NavbarPage(props) {
    return <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Pagination</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {routes.map((item) =>{
                            return <Nav.Link ><Link to={item.path}>{item.name}</Link></Nav.Link>                       

                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default NavbarPage;