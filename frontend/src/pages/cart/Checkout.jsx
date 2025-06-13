import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SmartLocationMarker from "../../components/map/SmartLocationMarker";

export default function Checkout() {
  return (
    <div className='flex w-full'>
      <MapContainer
        center={[0, 0]}
        zoom={15}
        scrollWheelZoom={true}
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='Google Maps'
          url='https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <SmartLocationMarker />
      </MapContainer>
    </div>
  );
}
