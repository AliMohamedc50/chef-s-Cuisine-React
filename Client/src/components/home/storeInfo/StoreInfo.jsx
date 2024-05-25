import React from 'react'
import { Container } from 'react-bootstrap';
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const StoreInfo = () => {
  return (
    <div className="storeInfo mt-5 mb-5 pt-5 pb-5">
      <Container
        className="container d-flex justify-content-center "
      >
        <div className="hold-infoitems d-flex justify-content-center gap-4 flex-wrap">
          <div className="Infoitem text-center ">
            <FaClock size="50px" className="mt-5" />
            <h5 className="mt-3">10 AM - 7 PM</h5>
            <p>Opening Hour</p>
          </div>
          <div className="Infoitem text-center">
            <FaMapLocationDot size="50px" className="mt-5" />
            <h5 className="mt-3">GEC, Chittagong</h5>
            <p>Address</p>
          </div>
          <div className="Infoitem text-center ">
            <FaPhoneAlt size="50px" className="mt-5" />
            <h5 className="mt-3">+880123443</h5>
            <p>Call Now</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StoreInfo
