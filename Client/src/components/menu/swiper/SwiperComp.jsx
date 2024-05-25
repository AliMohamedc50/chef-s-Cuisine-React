import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import {FreeMode, Pagination } from "swiper/modules";
import { Stack } from "react-bootstrap";

export default function SwiperComp({ data}) {
  // console.log(data);

       const upload_url = "http://localhost:1337";
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          680: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} style={{ paddingBottom: "37px" }}>
            <div className="pt-3 ps-4 pe-4 m-auto" style={{ width: "400px" }}>
              <Stack
                direction="horizontal"
                gap={3}
                className="hold-specials p-2 rounded-3 "
              >
                <div style={{ height: "150px" }} className="overflow-hidden ">
                  <img
                    className="w-h-img-cover"
                    src={
                      upload_url + item?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>
                <div className="hold-info pt-2 ">
                  <h4 className="fs-4 fw-bold ">{item.attributes.title}</h4>
                  <h3>${item.attributes.price}</h3>
                  <div>
                    <img src="./src/assets/3star.png" alt="" />
                  </div>
                </div>
              </Stack>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
