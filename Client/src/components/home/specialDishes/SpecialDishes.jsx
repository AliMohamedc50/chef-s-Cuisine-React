import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SpecialsItemSlider from './SpecialsItemSlider';
import { Link } from 'react-router-dom';

const SpecialDishes = () => {
  return (
    <div className="ourspecials m-bot-m-top ">
      <Container className="container">
        <Row className=" gap-5">
          <Col
            sm
            md={7}
            lg={5}
            className="ourSpecials__right p-4"
          >
            <h2>Our Specials</h2>
            <p>All of our food is prepared daily at our restaurants </p>
            <Link
              to="book-table"
              className="Book-Table fw-bold fs-4 text-decoration-none"
            >
              Book Table
            </Link>
          </Col>
          <Col
            sm
            md={7}
            lg={5}
            className="ourSpecials__left m-auto d-flex gap-4 flex-row "
          >
            <SpecialsItemSlider />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpecialDishes
