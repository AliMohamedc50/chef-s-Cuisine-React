import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TopDishes = () => {
  return (
    <div className="top-dishes m-bot-m-top ">
      <Container className="container">
        <h4 className='fw-bold'>Top Dishes</h4>
        <Row>
          <Col sm={12} md={6} lg={4} className="padding pt-4">
            <div className="dish p-3 d-flex gap-3">
              <div className="hold-img-dish">
                <img
                  className="img-fluid"
                  src="./src/assets/food-1.png"
                  alt=""
                />
              </div>
              <div className="aoutdish">
                <h5>Vegan Salad bowl</h5>
                <h6>$12</h6>
                <div>
                  <img src="./src/assets/3star.png" alt="" />
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="padding pt-4">
            <div className="dish p-3 d-flex gap-3  ">
              <div className="hold-img-dish">
                <img
                  className="img-fluid"
                  src="./src/assets/food-2.png"
                  alt=""
                />
              </div>
              <div className="aoutdish">
                <h5>Vegan Pesto Zoodles</h5>
                <h6>$12</h6>
                <div>
                  <img src="./src/assets/3star.png" alt="" />
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="padding pt-4">
            <div className="dish p-3 d-flex gap-3 ">
              <div className="hold-img-dish">
                <img
                  className="img-fluid"
                  src="./src/assets/food-7.png"
                  alt=""
                />
              </div>
              <div className="aoutdish">
                <h5>Hot Green Bowl</h5>
                <h6>$12</h6>
                <div>
                  <img src="./src/assets/3star.png" alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopDishes
