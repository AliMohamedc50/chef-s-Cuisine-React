import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact_Form = () => {
  return (
    <section id="form " >
            <Container className="container">
            <h3 className="form__title">
                Contact &amp; Inquiry
            </h3>
            <div className="form__wrapper">
                <form method="POST" name="contact"><input type="hidden" name="form-name" value="contact" />
                    <Row >
                        <Col sm={6} md={6} lg={6} className="form__group  col-12 ">
                            <label htmlFor="firstName">First Name</label>
                            <input className="p-col-2 p-md-3 " type="text" id="firstName" name="First Name" required="" fdprocessedid="5mkkyl"/>
                        </Col>
                        <Col sm={6} md={6} lg={6} className="form__group col-12 ">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="p-col-2 p-md-3 " type="text" id="lastName" name="Last Name" required="" fdprocessedid="0vxgpk"/>
                        </Col>
                        <Col sm={6} md={6} lg={6} className="form__group col-12">
                            <label htmlFor="email">Email</label>
                            <input className="p-col-2 p-md-3 " type="email" id="email" name="Email" required="" fdprocessedid="cyswt"/>
                        </Col>
                        <Col sm={6} md={6} lg={6} className="form__group  col-12">
                            <label htmlFor="subject">Subject</label>
                            <input className="p-col-2 p-md-3 " type="text" id="subject" name="Subject" required="" fdprocessedid="shnngj"/>
                        </Col>
                    </Row>
                    
                    <div className="form__group form__group__full">
                        <label htmlFor="message">Message</label>
                        <textarea className="p-col-2 p-md-3 " name="Message" id="message" cols="30" rows="10" ></textarea>
                    </div>
                    <button type="submit" className="Book-Table fw-bold fs-4 text-decoration-none mt-4" fdprocessedid="46ldd">Send</button>
                </form>
            </div>
            </Container>
        </section>
  )
};

export default Contact_Form;
