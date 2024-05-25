import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const For_Event = () => {
  return (
    <div className="for-event m-bot-m-top">
      <Container className="container">
        <Row className="row flex-column-reverse flex-lg-row">
          <Col lg={6} md={12} sm={12} className="cont_left">
            <div
              className="item rounded p-3 gap-3 d-flex mb-3"
            >
              <div
                className="rounded  overflow-hidden "
                style={{ flex: 1 }}

              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  src="./src/assets/event-corporate.png"
                  alt=""
                />
              </div>
              <div style={{ flex: 2 }}>
                <h4>Corporate Events</h4>
                <p>
                  Shaif's Cuisine is the perfect venue for your corporate
                  events. We specialize in private parties.
                </p>
              </div>
            </div>
            <div
              className="item rounded p-3 gap-3 d-flex"

            >
              <div
                className="rounded  overflow-hidden"
                style={{ flex: 1 }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  src="./src/assets/event-weedings.png"
                  alt=""
                />
              </div>
              <div style={{ flex: 2 }}>
                <h4>Weddings</h4>
                <p>
                  Shaif's Cuisine offers an intimately unique wedding experience
                  set in a spectacular setting that is sophisticated and
                  comfortable.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            className="cont_right text-lg-start pt-2 p-5 "
          >
            <h2>Book For Events</h2>
            <p>
              Book your private event or corporate function at Shaif's cuisine
              to experience a truly unique experience.
            </p>
            <Link
              to="/contact"
              className="Book-Table fw-bold fs-4 text-decoration-none"
            >
              Contact Now
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default For_Event
