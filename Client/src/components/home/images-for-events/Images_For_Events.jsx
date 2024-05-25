import React from 'react'
import { Container } from 'react-bootstrap'

const Images_For_Events = () => {
  return (
<div className="images-forevents m-bot-m-top">
        <Container className="container">
            <div className="row-event d-flex gap-2 ">
                <div className="overflow-hidden" style={{flex: 2}}><img style={{"width": "100%", "height": "100%"}} src="./src/assets/eventsMedia1.png" alt="" /> <img src="imags/" alt="" /></div>
                <div className="overflow-hidden" style={{flex: 1}}><img  style={{"width": "100%", "height": "100%"}} src="./src/assets/eventsMedia2.png" alt="" /></div>
            </div>
        </Container>
    </div>

  )
}

export default Images_For_Events
