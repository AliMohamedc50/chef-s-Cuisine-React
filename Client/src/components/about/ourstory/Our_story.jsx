import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Our_story = () => {
  return (
    <div className="ourstory m-bot-m-top">
            <Container className="container">
                <Row className="row">
                    <Col sm={12} md={5} lg={5} ><img className="w-h-img-cover" src="./src/assets/ourStoryImg.png" alt="" /></Col>
                    <Col sm={12} md={7} lg={7} className="info">
                        <h1 className="pt-3">Our Story</h1>
                        <h4>It's all started since 1998</h4>
                        <p >Welcome to Shaif's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a dining experience to remember.</p>
                        <p >Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties, business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and seating for up to 65 guests, we can cater for all occasions.</p>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Our_story;