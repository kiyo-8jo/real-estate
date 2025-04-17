'use client'

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import styles from "./DetailGoogleMap.module.css";

const DetailGoogleMap = () => {
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
    lat: 33.110687,
    lng: 139.791294,
  };

  // マーカーの緯度経度
  const marker1 = {
    lat: 33.077247,
    lng: 139.788224,
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
