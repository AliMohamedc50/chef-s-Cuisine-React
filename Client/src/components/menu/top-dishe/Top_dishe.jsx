import React from "react";
import SwiperComp from "../swiper/SwiperComp";
import useFetch from "../../../../hooks/useFetch";

const Top_dishe = () => {

  const { data } = useFetch(`/top-dishes?populate=*`);

  return (
    <>
      <div className="top-dishe m-bot-m-top">
        <div className="container">
          <h4 className="fw-bold">Top Dishes</h4>
          <SwiperComp data={data} />
        </div>
      </div>
    </>
  );
};

export default Top_dishe;
