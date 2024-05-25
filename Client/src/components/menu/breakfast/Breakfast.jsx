import React from "react";
import SwiperComp from "../swiper/SwiperComp";
import useFetch from "../../../../hooks/useFetch";



const Breakfast = () => {
  const { data } = useFetch(`/breakfasts?populate=*`);
  return (
    <>
      <div className="Breakfast m-bot-m-top">
        <div className="container">
          <h4 className="fw-bold">Breakfast</h4>
          <SwiperComp data={data} />
        </div>
      </div>
    </>
  );
};

export default Breakfast;
