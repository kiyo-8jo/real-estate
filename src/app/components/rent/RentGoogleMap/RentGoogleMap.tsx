"use client";

import {
  GoogleMap,
  InfoWindow,
  Libraries,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./RentGoogleMap.module.css";
import { MapAryDataType, RealEstateDataType } from "@/app/types/types";

/* GoogleMapの設定 */
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

// 吹き出しのcss
const divStyle = {
  background: "white",
  fontSize: 6,
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

  // データ取得
  const [data, setData] = useState<undefined | RealEstateDataType[]>([]);
  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const getData = async () => {
      const res = await fetch(`${API_URL}/api/getAllRentData`);
      const _data = await res.json();
      setData(_data);
    };
    getData();
  }, []);

  // マップ用データ配列
  const dataAry: MapAryDataType[] = [];
  data!.forEach((_data) =>
    dataAry.push({
      id: _data.id,
      lat: _data.mapLat,
      lng: _data.mapLng,
      name: _data.name,
    })
  );
  return (
    <div className={styles.wrapper}>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={containerStyle}
          onLoad={() => createOffsetSize()}
        >
          {/* マーカー */}
          {dataAry!.map((data) => {
            const _ary = { lat: data.lat, lng: data.lng };
            return <MarkerF position={_ary} key={data.id} />;
          })}

          {/* 吹き出し*/}
          {dataAry!.map((data) => {
            const _ary = { lat: data.lat, lng: data.lng };
            return (
              <InfoWindow
                position={_ary}
                options={infoWindowOptions}
                key={data.id}
              >
                <div style={divStyle}>
                  <Link href={`/detail/${data.id}`}>
                    <h1>{data.name}</h1>
                  </Link>
                </div>
              </InfoWindow>
            );
          })}
        </GoogleMap>
      )}
    </div>
  );
};

export default RentGoogleMap;
