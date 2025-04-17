import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 33.110687,
  lng: 139.791294,
};

const RentGoogleMap = () => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_MY_GOOGLE_MAP_API_KEY!;
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={containerStyle}
      ></GoogleMap>
    </LoadScript>
  );
};

export default RentGoogleMap;
