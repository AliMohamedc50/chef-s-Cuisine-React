import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dish_For_Discount = () => {
  return (
    <div className="dish-for-discount  m-bot-m-top">
      <Container className="container  container-dish-for-discount">
        <Row className="row p-3">
          <Col lg={7} md={12} sm={12} className="hold-img-dish-for-discount">
            <div className="row-dish-for-discount d-flex">
              <div className="p-1">
                <img
                  className="img-fluid rounded"
                  src="./src/assets/food-4.png"
                  alt=""
                />
              </div>
              <div className="p-1">
                <img
                  className="img-fluid rounded"
                  src="./src/assets/food-5.png"
                  alt=""
                />
              </div>
              <div className="p-1">
                <img
                  className="img-fluid rounded"
                  src="./src/assets/food-4.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12} className="info-dish-for-discount p-3">
            <h3>20% OFF</h3>
            <h2>Demo Dish For Discount</h2>
            <div className="hold-h3 d-flex gap-2">
              <h3 className="text-decoration-line-through h3">$45</h3>
              <h3>$35</h3>
            </div>
            <div className="hold-stars">
              <img className="" src="./src/assets/3star.png" alt="" />
            </div>
            <Link
              className="Book-Table fw-bold fs-4 text-decoration-none "
              to="book-table"
            >
              Book Table
            </Link>
            <img
              className="imags-discount"
              src="./src/assets/discount-illustration.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dish_For_Discount
