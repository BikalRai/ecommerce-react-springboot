import { useEffect, useState } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";

export default function SmartLocationMarker() {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState("");
  const map = useMap();

  const getLocationName = async (lat, lng) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );
    const data = await res.json();
    if (data?.address) {
      setLocationName(
        data.address.suburb ||
          data.address.village ||
          data.address.city ||
          data.display_name
      );
    } else {
      setLocationName("Unknown location");
    }
  };

  // Set current location on load
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        map.setView([latitude, longitude], 16);
        await getLocationName(latitude, longitude);
      },
      (err) => console.error("Geolocation error", err)
    );
  }, [map]);

  // Listen for clicks and update marker
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      map.flyTo([lat, lng], map.getZoom());
      getLocationName(lat, lng);
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>
        📍 <strong>{locationName || "Selected Location"}</strong>
        <br />
        <br />
        Latitude: {position[0].toFixed(5)} <br />
        Longitude: {position[1].toFixed(5)}
      </Popup>
    </Marker>
  ) : null;
}
