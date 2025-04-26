"use client";

import {
  GoogleMap,
  InfoWindow,
  Libraries,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";
import styles from "./RentGoogleMap.module.css";

// 地図全体のcss
const containerStyle = {
  width: "100%",
  height: "550px",
};

// 地図の緯度経度
const center = {
  lat: 33.110687,
  lng: 139.791294,
};

// マーカーの緯度経度
const marker1 = {
  lat: 33.147414,
  lng: 139.773632,
};
const marker2 = {
  lat: 33.094291,
  lng: 139.818951,
};

// 吹き出しのcss
const divStyle = {
  background: "white",
  fontSize: 8,
};

const libraries = ["visualization"] as Libraries;

const RentGoogleMap = () => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_MY_GOOGLE_MAP_API_KEY!;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries,
  });
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  return (
    <div className={styles.wrapper}>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={12}
          mapContainerStyle={containerStyle}
          onLoad={() => createOffsetSize()}
        >
          {/* マーカー */}
          <MarkerF position={marker1} />
          <MarkerF position={marker2} />
          {/* 吹き出し */}
          <InfoWindow position={marker1} options={infoWindowOptions}>
            <div style={divStyle}>
              <Link href="/">
                <h1>賃貸物件1</h1>
              </Link>
            </div>
          </InfoWindow>
          <InfoWindow position={marker2} options={infoWindowOptions}>
            <div style={divStyle}>
              <Link href="/">
                <h1>賃貸物件2</h1>
              </Link>
            </div>
          </InfoWindow>
        </GoogleMap>
      )}
    </div>
  );
};

export default RentGoogleMap;
