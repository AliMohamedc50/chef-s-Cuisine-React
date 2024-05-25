import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Choose_Our_Food = () => {
  return (
      <div className="choose-our-food m-bot-m-top">
        <Container className="container">
            <Row className="row">
                <Col lg={7} md={7} sm={12} className="cont_left pt-5">
                    <h2>Why Choose Our Food</h2>
                    <p>Quality of Service, Food, Ambiance, and Value of 
                        Money are the primary elements for choosing a 
                        restaurant. Shaif's Cuisine is one of the most 
                        exquisite fine-dinning restaurant in Chittagong 
                        cities with a captivating view of GEC Hills, 
                        perfect ambiance, and scrumptious food.</p>
                </Col>
                <Col lg={5} md={5} sm={12}  className="cont_right pt-2 ">
                    <div className="row-advantages d-flex flex-wrap ">
                        <div className="hold-why-us p-2">
                            <div className="why-us text-center rounded">
                                <img className="pt-5" src="https://d33wubrfki0l68.cloudfront.net/c5ff1b62243065fefac2d33cad9eb75287a05759/182c5/images/whyus-icon1.svg" alt="" />
                                <h6 className="pt-2 pb-5">Quality Food</h6>
                            </div>
                        </div>
                        <div className="hold-why-us p-2">
                            <div className="why-us text-center rounded">
                                <img className="pt-5" src="https://d33wubrfki0l68.cloudfront.net/9d2902618b5809f383f55647ade358e0c8319d8f/ca82f/images/whyus-icon2.svg" alt="" />
                                <h6 className="pt-2 pb-5">classical taste</h6>
                            </div>
                        </div>
                        <div className="hold-why-us p-2">
                            <div className="why-us text-center rounded" >
                                <img className="pt-5" src="https://d33wubrfki0l68.cloudfront.net/ec06820d4166afd91931ba9577e3f453525ecf32/30491/images/whyus-icon3.svg" alt="" />
                                <h6 className="pt-2 pb-5">Skilled chef</h6>
                            </div>
                        </div>
                        
                        <div className="hold-why-us p-2">
                            <div className="why-us text-center rounded">
                                <img className="pt-5" src="https://d33wubrfki0l68.cloudfront.net/9aee7c4efd47314274a3db61d72d62c36183d381/289ed/images/whyus-icon4.svg" alt="" />
                                <h6 className="pt-2 pb-5">Best service</h6>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Choose_Our_Food
