import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing  ">
      <Container className="container pt-5">
        <Row className=" pt-5 d-flex justify-content-center align-items-center pb-2">
          <Col
            sm={12}
            md={6}
            lg={6}
            className=" pb-5 text-md-start"
          >
            <h1 className="pb-4">
              The flavor of <br /> tradition
            </h1>
            <p className="pb-2 ">
              We are a multi-cuisine restaurant offering a wide variety of food
              experience in both casual and fine dining environment.
            </p>
            <Link
              className="Book-Table  fw-bold fs-4 text-decoration-none "
              to={"/menu"}
            >
              Expore Menu
            </Link>
          </Col>
          <Col sm={12} md={6} lg={6} className="pt-2">
            <img className="img-fluid " src="./src/assets/heroImg.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing
