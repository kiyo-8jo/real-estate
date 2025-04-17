import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const RentGoogleMap = () => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  return (
    <LoadScript googleMapsApiKey={`${GOOGLE_MAP_API_KEY}`}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={containerStyle}
      ></GoogleMap>
    </LoadScript>
  );
};

export default RentGoogleMap;
