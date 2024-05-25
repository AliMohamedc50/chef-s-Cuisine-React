import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const News_letter = () => {
  return (
    <div className="newsletter m-bot-m-top">
      <Container className="container rounded-3 pe-5 ps-5 pt-5 pb-5">
        <Row className="row ">
          <Col sm={12} md={6} lg={6} className="left">
            <h1 className="">Join Newsletter</h1>
            <p>
              Get notified with the latest news and recent offers from the
              “Shaif’s Cuisine”
            </p>
          </Col>
          <Col sm={12} md={6} lg={6} className="right d-flex align-items-center">
            <form action="">
              <input
                type="email"
                placeholder="Your Email Address"
                fdprocessedid="c3p0pw"
              />
              <button type="submit" fdprocessedid="wmwgo4">
                Join
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News_letter
