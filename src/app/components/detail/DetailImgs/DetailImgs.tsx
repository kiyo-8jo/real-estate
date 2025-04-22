"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

interface DetailImgsProps {
  urlAry: string[];
}

const DetailImgs = (props: DetailImgsProps) => {
  return (
    <Swiper
      pagination={{
        type: "bullets",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {props.urlAry.map((url) => (
        <SwiperSlide key={url}>
          <Image src={url} alt={url} width={1000} height={400} priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DetailImgs;
