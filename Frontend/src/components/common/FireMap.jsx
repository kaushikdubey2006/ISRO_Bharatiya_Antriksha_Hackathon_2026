import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

function getColor(level) {
  switch (level) {
    case "Critical":
      return "#b91c1c";

    case "High":
      return "#ef4444";

    case "Moderate":
      return "#f97316";

    default:
      return "#eab308";
  }
}

function getRadius(brightness) {
  return Math.max(8, brightness / 20);
}
function ResizeMap() { const map = useMap(); useEffect(() => { setTimeout(() => { map.invalidateSize(); }, 200); }, [map]); return null;}

function FireMap() {

  const [fireData, setFireData] = useState([]);

  useEffect(() => {

    fetch("http://https://aerosynq-isro.onrender.com/api/fire")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fire API Error");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fire Backend:", data);
        setFireData(data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <MapContainer
      center={[22.8, 79]}
      zoom={5}
      minZoom={4}
      maxZoom={8}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{
        height: "320px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {fireData.map((fire, index) => (

        <CircleMarker
          key={index}
          center={fire.position}
          radius={getRadius(fire.brightness)}
          pathOptions={{
            color: getColor(fire.status),
            fillColor: getColor(fire.status),
            fillOpacity: 0.8,
            weight: 2,
          }}
        >

          <Popup>

            <div style={{ minWidth: "220px" }}>

              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                {fire.city}
              </h3>

              <p><strong>Brightness:</strong> {fire.brightness}</p>

              <p><strong>FRP:</strong> {fire.frp}</p>

              <p><strong>Status:</strong> {fire.status}</p>

              <p><strong>Confidence:</strong> {fire.confidence}</p>

              <p><strong>Satellite:</strong> {fire.satellite}</p>

              <p><strong>Source:</strong> {fire.source}</p>

              <p><strong>Date:</strong> {fire.date}</p>

              <p><strong>Time:</strong> {fire.time}</p>

            </div>

          </Popup>

        </CircleMarker>

      ))}

    </MapContainer>
  );
}

export default FireMap;