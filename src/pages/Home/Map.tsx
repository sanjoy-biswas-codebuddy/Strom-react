import React from "react";
import mapImage from "../../assets/map.png";

const Map: React.FC = () => {
  return <div>
    <img src={mapImage} alt="map" className="w-full h-auto" />
  </div>;
};

export default Map;
