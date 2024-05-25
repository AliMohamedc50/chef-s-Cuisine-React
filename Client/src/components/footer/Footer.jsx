import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-5 pb-3">
      <Container className="container">
        <Row className="row">
          <Col md={3}>
            <div className="pb-3">
              <img
                style={{ width: "150px" }}
                src="./src/assets/logo.svg"
                alt=""
              />
            </div>
            <p>
              Fresh and delicious traditional Bangladeshi food to delight the
              whole family.
            </p>
            <h4>Follow us</h4>
            <Stack direction="horizontal" gap={2}>
              <span>
                <FaFacebook size="22px" />
              </span>
              <span>
                <FaInstagram size="22px" />
              </span>
              <span>
                <FaTwitter size="22px" />
              </span>
            </Stack>
          </Col>
          <Col lg={3} md={3} className="link col-lg-3 col-md-3">
            <ul className="">
              <li className="fs-5 fw-bold">Links</li>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/menu">
                <li>Menu</li>
              </Link>
              <Link to="/book-table">
                <li>Book Table</li>
              </Link>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/contact">
                <li>contact Us</li>
              </Link>
            </ul>
          </Col>
          <Col md={3} className="support">
            <ul >
              <li className="fs-5 fw-bold">Support</li>
              <li>

                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <p>Support Center</p>
              </li>
              <li>
                <p >Feedback</p>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} className="Contact">
            <ul className="">
              <li className="fs-5 fw-bold">Contact</li>
              <li>
                <a>+880123</a>
              </li>
              <li>
                <a>webcifar@gmail.com</a>
              </li>
              <li>
                <a>GEC Circle, Chittagong, Bangladesh</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
