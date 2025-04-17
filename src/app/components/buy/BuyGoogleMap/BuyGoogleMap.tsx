import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";
import styles from "./BuyGoogleMap.module.css";

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
  lat: 33.077247,
  lng: 139.788224,
};
const marker2 = {
  lat: 33.127433,
  lng: 139.755436,
};

// 吹き出しのcss
const divStyle = {
  background: "white",
  fontSize: 8,
};

const BuyGoogleMap = () => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_MY_GOOGLE_MAP_API_KEY!;
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  return (
    <div className={styles.wrapper}>
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
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
                <h1>販売物件1</h1>
              </Link>
            </div>
          </InfoWindow>
          <InfoWindow position={marker2} options={infoWindowOptions}>
            <div style={divStyle}>
              <Link href="/">
                <h1>販売物件2</h1>
              </Link>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default BuyGoogleMap;
