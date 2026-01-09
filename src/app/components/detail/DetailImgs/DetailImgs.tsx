"use client";

import Image from "next/image";
import styles from "./DetailImgs.module.css";
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
        <SwiperSlide className={styles.container} key={url}>
          <Image
            className={styles.slide}
            src={url}
            alt={url}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DetailImgs;
