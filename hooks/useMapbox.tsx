import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pc3J3IiwiYSI6ImNrd2ppZ3BvZjFpaXYybnF2eDBqeGFqcjMifQ.a6y5PBSMXGuJft2OtUeA4A';

export function useMapbox() {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return { mapContainerRef };
}
