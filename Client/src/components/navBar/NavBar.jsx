import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavCollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src="./src/assets/logo.svg" alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center gap-3 align-items-center ">
          <ul className="navbar-nav mb-2 mb-lg-0">
              <Link
                className="nav-link  p-lg-3 fs-5 "
                to="/"
              >
                <li className="nav-item">
                    Home
                </li>
              </Link>
              <Link
                className="nav-link  p-lg-3 fs-5 "
                to="/menu"
              >
                <li className="nav-item">
                    Menu
                </li>
              </Link>
              <Link
                className="nav-link  p-lg-3 fs-5 "
                to="/about"
              >
                <li className="nav-item">
                    About
                </li>
              </Link>
              <Link
                className="nav-link p-lg-3 fs-5 "
                to="/contact"
              >
                <li className="nav-item">
                    Contact
                </li>
              </Link>
          </ul>
            <Link to="/book-table">
              <Button variant="success" size="lg" className="fw-bold fs-3">
                Book Table
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCollapsibleExample;
