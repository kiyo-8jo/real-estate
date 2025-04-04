"use client";

import Image from "next/image";
import styles from "./RentImg.module.css";
import Link from "next/link";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { CoordsType } from "@/app/types/types";

const RentImg = () => {
  //   const initialCoords: CoordsType = {
  //     mitsune: {
  //       rent: [465, 160, 510, 210],
  //       buy: [518, 160, 557, 210],
  //     },
  //     okago: {
  //       rent: [254, 250, 302, 300],
  //       buy: [311, 250, 343, 300],
  //     },
  //     kashitate: {
  //       rent: [373, 370, 421, 420],
  //       buy: [430, 370, 464, 420],
  //     },
  //     nakanogo: {
  //       rent: [558, 370, 602, 420],
  //       buy: [617, 370, 648, 420],
  //     },
  //     sueyoshi: {
  //       rent: [680, 250, 728, 300],
  //       buy: [736, 250, 784, 300],
  //     },
  //   };
  //   const [coords, setCoords] = useState<CoordsType>(initialCoords);

  //   const imgRef = useRef<HTMLImageElement>(null);

  //   const updateCoordinates = useCallback(() => {
  //     if (!imgRef.current) return;
  //     const img = imgRef.current;
  //     const naturalWidth = 924;
  //     const naturalHeight = 500;
  //     const widthRatio = img.clientWidth / naturalWidth;
  //     const heightRatio = img.clientHeight / naturalHeight;
  //     const calculateCoords = (coords: number[]) => {
  //       return coords.map((coord, index: number) =>
  //         index % 2 === 0 ? coord * widthRatio : coord * heightRatio
  //       );
  //     };
  //     setCoords({
  //       mitsune: {
  //         rent: calculateCoords(initialCoords.mitsune.rent),
  //         buy: calculateCoords(initialCoords.mitsune.buy),
  //       },
  //       okago: {
  //         rent: calculateCoords(initialCoords.okago.rent),
  //         buy: calculateCoords(initialCoords.okago.buy),
  //       },
  //       kashitate: {
  //         rent: calculateCoords(initialCoords.kashitate.rent),
  //         buy: calculateCoords(initialCoords.kashitate.buy),
  //       },
  //       nakanogo: {
  //         rent: calculateCoords(initialCoords.nakanogo.rent),
  //         buy: calculateCoords(initialCoords.nakanogo.buy),
  //       },
  //       sueyoshi: {
  //         rent: calculateCoords(initialCoords.sueyoshi.rent),
  //         buy: calculateCoords(initialCoords.sueyoshi.buy),
  //       },
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   useEffect(() => {
  //     window.addEventListener("resize", updateCoordinates);
  //     const handleLoad = () => {
  //       updateCoordinates();
  //     };
  //     const img = imgRef.current;
  //     if (img) {
  //       img.addEventListener("load", handleLoad);
  //     }
  //     updateCoordinates();
  //     return () => {
  //       window.removeEventListener("resize", updateCoordinates);
  //       if (img) {
  //         img.removeEventListener("load", handleLoad);
  //       }
  //     };
  //   }, [updateCoordinates]);

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.img}
        src="/rent/rent.png"
        useMap="#image-map"
        alt="rent-map"
        fill
        priority
        sizes="100%"
        // ref={imgRef}
      />
      <map name="image-map">
        <Link href="/rent/mitsune">
          <area
            target="_blank"
            alt="mitusne_rent"
            title="mitusne_rent"
            // coords={coords.mitsune.rent.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/buy/mitsune">
          <area
            target="_blank"
            alt="mitusne_buy"
            title="mitusne_buy"
            href="http://localhost:3000/buy"
            // coords={coords.mitsune.buy.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/rent/okago">
          <area
            target="_blank"
            alt="okago_rent"
            title="okago_rent"
            href="http://localhost:3000/rent"
            // coords={coords.okago.rent.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/buy/okago">
          <area
            target="_blank"
            alt="okago_buy"
            title="okago_buy"
            href="http://localhost:3000/buy"
            // coords={coords.okago.buy.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/rent/kashitate">
          <area
            target="_blank"
            alt="kashitate_rent"
            title="kashitate_rent"
            href="http://localhost:3000/rent"
            // coords={coords.kashitate.rent.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/buy/kashitate">
          <area
            target="_blank"
            alt="kashitate_buy"
            title="kashitate_buy"
            href="http://localhost:3000/buy"
            // coords={coords.kashitate.buy.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/rent/nakanogo">
          <area
            target="_blank"
            alt="nakanogo_rent"
            title="nakanogo_rent"
            href="http://localhost:3000/rent"
            // coords={coords.nakanogo.rent.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/buy/nakanogo">
          <area
            target="_blank"
            alt="nakanogo_buy"
            title="nakanogo_buy"
            href="http://localhost:3000/buy"
            // coords={coords.nakanogo.buy.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/rent/sueyoshi">
          <area
            target="_blank"
            alt="sueyoshi_rent"
            title="sueyoshi_rent"
            href="http://localhost:3000/rent"
            // coords={coords.sueyoshi.rent.join(",")}
            shape="rect"
          />
        </Link>
        <Link href="/buy/sueyoshi">
          <area
            target="_blank"
            alt="sueyoshi_buy"
            title="sueyoshi_buy"
            href="http://localhost:3000/buy"
            // coords={coords.sueyoshi.buy.join(",")}
            shape="rect"
          />
        </Link>
      </map>
    </div>
  );
};

export default RentImg;
