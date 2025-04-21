"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface DetailImgsProps {
  urlAry: string[];
}

const DetailImgs = (props: DetailImgsProps) => {
  return (
    <Swiper>
      {props.urlAry.map((url) => (
        <SwiperSlide key={url}>
          <Image src={url} alt={url} width={500} height={400} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DetailImgs;
