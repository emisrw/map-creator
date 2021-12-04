import { useContext, createContext, useState } from "react";
import { useMapBox } from 
const MapContext = createContext(null);

export function useMap() {
  return useContext(MapContext);
}

export function MapProvider({ children }) {
  const [mapProperties, setMapProperties] = useState(null);

  function updateMapProperties(lat, long) {
    setMapProperties((prevProp) => {
      return [...prevProp, { lat, long }];
    });
  }

  return (
    <MapContext.Provider value={{ mapProperties, updateMapProperties }}>
      {children}
    </MapContext.Provider>
  );
}
