import React from "react";
import SwiperComp from "../swiper/SwiperComp";
import useFetch from "../../../../hooks/useFetch";
import { Container } from "react-bootstrap";

const Dinner = () => {

    const { data } = useFetch(`/dinners?populate=*`);

  return (
    <>
      <div className="Breakfast m-bot-m-top">
        <Container className="container">
          <h4 className="fw-bold">Dinner</h4>
          <SwiperComp data={data} />
        </Container>
      </div>
    </>
  );
};

export default Dinner;
