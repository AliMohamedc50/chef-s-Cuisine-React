import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Explore_Our_Menu = () => {
  return (
    <div>
         <div className="exploreourmenu m-bot-m-top">
        <Container className="container">
            <h1 className="mb-5">Explore Our Menu</h1>
            <h4>Our Specials</h4>
            <Row>
                <Col sm={12} md={6} lg={6} className="col-12 pt-2 ps-4 pe-4">
                    <div className="row hold-specials p-3 ps-1 rounded-3">
                        <Col sm={4} md={5} lg={5} style={{minHeight: "130px"}} className=" col-5 overflow-hidden "><img className="w-h-img-cover" src="./src/assets/food-6.png" alt="" /></Col>
                        <Col sm={8} md={7} lg={7} className="hold-info pt-2">
                            <h4 style={{width: "100%"}} className="fs-3 fw-bold ">Sweet Potato Fries Bowl</h4>
                            <h3>$12</h3>
                            <div><img src="./src/assets/3star.png" alt="" /></div>
                        </Col>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} className="col-12 pt-2 ps-4 pe-4">
                    <div className="row hold-specials p-3 ps-1 rounded-3">
                        <Col sm={4} md={5} lg={5} style={{minHeight: "130px"}} className=" col-5 overflow-hidden "><img className="w-h-img-cover" src="./src/assets/food-6.png" alt="" /></Col>
                        <Col sm={8} md={7} lg={7} className="hold-info pt-2">
                            <h4 style={{width: "100%"}} className="fs-3 fw-bold ">Sweet Potato Fries Bowl</h4>
                            <h3>$12</h3>
                            <div><img src="./src/assets/3star.png" alt="" /></div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
  )
}

export default Explore_Our_Menu;