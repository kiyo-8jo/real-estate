"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import styles from "./DetailGoogleMap.module.css";

interface LatAndLng {
  mapLat: number;
  mapLng: number;
}

const DetailGoogleMap = (props: LatAndLng) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_MY_GOOGLE_MAP_API_KEY!;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries: ["geometry", "drawing"],
  });

  // 地図全体のcss
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  // 地図の緯度経度
  const center = {
    lat: props.mapLat,
    lng: props.mapLng,
  };

  // マーカーの緯度経度
  const marker1 = {
    lat: props.mapLat,
    lng: props.mapLng,
  };

  return (
    <div className={styles.wrapper}>
      {isLoaded && (
        <GoogleMap center={center} zoom={15} mapContainerStyle={containerStyle}>
          {/* マーカー */}
          <MarkerF position={marker1} />
        </GoogleMap>
      )}
    </div>
  );
};

export default DetailGoogleMap;
