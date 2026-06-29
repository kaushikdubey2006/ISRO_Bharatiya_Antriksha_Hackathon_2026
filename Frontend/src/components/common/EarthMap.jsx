import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";


import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const AQIData = [
  {
    city: "Delhi",
    position: [28.6139, 77.2090],
    value: 312,
    prediction: 338,
    status: "Severe",
    confidence: "97%",
  },
  {
    city: "Mumbai",
    position: [19.0760, 72.8777],
    value: 146,
    prediction: 161,
    status: "Moderate",
    confidence: "95%",
  },
  {
    city: "Nagpur",
    position: [21.1458, 79.0882],
    value: 182,
    prediction: 201,
    status: "Poor",
    confidence: "94%",
  },
  {
    city: "Pune",
    position: [18.5204, 73.8567],
    value: 134,
    prediction: 149,
    status: "Moderate",
    confidence: "95%",
  },
  {
    city: "Hyderabad",
    position: [17.3850, 78.4867],
    value: 176,
    prediction: 191,
    status: "Poor",
    confidence: "96%",
  },
  {
    city: "Chennai",
    position: [13.0827, 80.2707],
    value: 96,
    prediction: 104,
    status: "Satisfactory",
    confidence: "93%",
  },
  {
    city: "Bengaluru",
    position: [12.9716, 77.5946],
    value: 118,
    prediction: 132,
    status: "Moderate",
    confidence: "95%",
  },
  {
    city: "Kolkata",
    position: [22.5726, 88.3639],
    value: 228,
    prediction: 241,
    status: "Very Poor",
    confidence: "96%",
  },
  {
    city: "Ahmedabad",
    position: [23.0225, 72.5714],
    value: 184,
    prediction: 198,
    status: "Poor",
    confidence: "95%",
  },
  {
    city: "Jaipur",
    position: [26.9124, 75.7873],
    value: 164,
    prediction: 177,
    status: "Poor",
    confidence: "94%",
  },
  {
    city: "Lucknow",
    position: [26.8467, 80.9462],
    value: 246,
    prediction: 262,
    status: "Very Poor",
    confidence: "97%",
  },
  {
    city: "Bhopal",
    position: [23.2599, 77.4126],
    value: 152,
    prediction: 168,
    status: "Moderate",
    confidence: "94%",
  },
  {
    city: "Indore",
    position: [22.7196, 75.8577],
    value: 142,
    prediction: 154,
    status: "Moderate",
    confidence: "95%",
  },
  {
    city: "Patna",
    position: [25.5941, 85.1376],
    value: 231,
    prediction: 245,
    status: "Very Poor",
    confidence: "96%",
  },
  {
    city: "Raipur",
    position: [21.2514, 81.6296],
    value: 176,
    prediction: 192,
    status: "Poor",
    confidence: "95%",
  },
];
const HCHOData = [
  {
    city: "Delhi NCR",
    position: [28.7041, 77.1025],
    value: 2.84,
    prediction: 3.02,
    status: "High",
    source: "Traffic + Industry",
    confidence: "97%",
  },
  {
    city: "Mumbai Industrial Belt",
    position: [19.0760, 72.8777],
    value: 2.41,
    prediction: 2.60,
    status: "High",
    source: "Petrochemical",
    confidence: "96%",
  },
  {
    city: "Jamnagar",
    position: [22.4707, 70.0577],
    value: 3.12,
    prediction: 3.34,
    status: "Very High",
    source: "Refinery",
    confidence: "98%",
  },
  {
    city: "Vadodara",
    position: [22.3072, 73.1812],
    value: 2.67,
    prediction: 2.88,
    status: "High",
    source: "Chemical Industry",
    confidence: "96%",
  },
  {
    city: "Ankleshwar",
    position: [21.6264, 73.0152],
    value: 3.48,
    prediction: 3.70,
    status: "Critical",
    source: "Industrial Cluster",
    confidence: "99%",
  },
  {
    city: "Nagpur",
    position: [21.1458, 79.0882],
    value: 1.62,
    prediction: 1.74,
    status: "Moderate",
    source: "Traffic",
    confidence: "95%",
  },
  {
    city: "Korba",
    position: [22.3595, 82.7501],
    value: 2.91,
    prediction: 3.10,
    status: "Very High",
    source: "Thermal Power",
    confidence: "98%",
  },
  {
    city: "Singrauli",
    position: [24.1998, 82.6754],
    value: 3.26,
    prediction: 3.52,
    status: "Critical",
    source: "Coal Plants",
    confidence: "99%",
  },
  {
    city: "Durgapur",
    position: [23.5204, 87.3119],
    value: 2.43,
    prediction: 2.66,
    status: "High",
    source: "Steel Industry",
    confidence: "97%",
  },
  {
    city: "Jamshedpur",
    position: [22.8046, 86.2029],
    value: 2.32,
    prediction: 2.54,
    status: "High",
    source: "Metallurgy",
    confidence: "96%",
  },
  {
    city: "Visakhapatnam",
    position: [17.6868, 83.2185],
    value: 2.11,
    prediction: 2.28,
    status: "Moderate",
    source: "Port + Industry",
    confidence: "95%",
  },
  {
    city: "Chennai Industrial Zone",
    position: [13.0827, 80.2707],
    value: 2.09,
    prediction: 2.23,
    status: "Moderate",
    source: "Manufacturing",
    confidence: "95%",
  },
  {
    city: "Hyderabad",
    position: [17.3850, 78.4867],
    value: 1.94,
    prediction: 2.06,
    status: "Moderate",
    source: "Urban Emissions",
    confidence: "95%",
  },
  {
    city: "Faridabad",
    position: [28.4089, 77.3178],
    value: 2.78,
    prediction: 2.96,
    status: "High",
    source: "Industry",
    confidence: "97%",
  },
  {
    city: "Panipat",
    position: [29.3909, 76.9635],
    value: 2.86,
    prediction: 3.01,
    status: "High",
    source: "Refineries",
    confidence: "98%",
  },
  {
    city: "Noida",
    position: [28.5355, 77.3910],
    value: 2.35,
    prediction: 2.49,
    status: "Moderate",
    source: "Urban Activity",
    confidence: "95%",
  },
  {
    city: "Pune",
    position: [18.5204, 73.8567],
    value: 1.76,
    prediction: 1.88,
    status: "Moderate",
    source: "Traffic",
    confidence: "94%",
  },
  {
    city: "Raipur",
    position: [21.2514, 81.6296],
    value: 2.66,
    prediction: 2.83,
    status: "High",
    source: "Steel Plants",
    confidence: "97%",
  },
  {
    city: "Angul",
    position: [20.8444, 85.1511],
    value: 3.04,
    prediction: 3.22,
    status: "Critical",
    source: "Thermal Plants",
    confidence: "99%",
  },
  {
    city: "Surat",
    position: [21.1702, 72.8311],
    value: 2.18,
    prediction: 2.36,
    status: "Moderate",
    source: "Textile Industry",
    confidence: "95%",
  },
  
];
function ResizeMap() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

function getAQIColor(value) {
  if (value <= 50) return "#22c55e";
  if (value <= 100) return "#eab308";
  if (value <= 200) return "#f97316";
  if (value <= 300) return "#ef4444";
  return "#9333ea";
}

function getHCHOColor(value) {
  if (value <= 1.0) return "#22c55e";
  if (value <= 2.0) return "#eab308";
  if (value <= 3.0) return "#f97316";
  return "#9333ea";
}

function getRadius(type, value) {
  if (type === "aqi") {
    return Math.max(8, value / 20);
  }

  return Math.max(8, value * 5);
}

function EarthMap({ type = "aqi" }) {
  const [aqiData, setAqiData] = useState([]);
const [hchoData, setHchoData] = useState([]);

  useEffect(() => {
    fetch("http://https://aerosynq-isro.onrender.com/api/hcho")
    fetch("http://https://aerosynq-isro.onrender.com/api/aqi")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setAqiData(data))
      .catch((err) => {
    console.error("AQI API Error:", err);
});

    fetch("http://https://aerosynq-isro.onrender.com/api/hcho")
  .then((res) => {
    if (!res.ok) throw new Error("API Error");
    return res.json();
  })
  .then((data) => {
    console.log("HCHO Backend:", data);
    setHchoData(data);
  })
  .catch((err) => {
    console.error(err);
  });
    
});
  

  const data = type === "hcho" ? hchoData : aqiData;

  return (
    <MapContainer
      center={[22.8, 79]}
      zoom={5}
      minZoom={4}
      maxZoom={10}
      zoomControl={true}
      scrollWheelZoom={true}
      style={{
        height: "650px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap Contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ResizeMap />

      {data.map((item) => (
        <CircleMarker
          key={item.city}
          center={item.position}
          radius={getRadius(type, item.value)}
          pathOptions={{
            color:
              type === "aqi"
                ? getAQIColor(item.value)
                : getHCHOColor(item.value),

            fillColor:
              type === "aqi"
                ? getAQIColor(item.value)
                : getHCHOColor(item.value),

            fillOpacity: 0.7,
            weight: 2,
          }}
        >
          <Popup>
            <div style={{ minWidth: "220px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {item.city}
              </h2>

              {type === "aqi" ? (
                <>
                  <p>
                    <strong>AQI :</strong> {item.value}
                  </p>

                  <p>
                    <strong>Prediction :</strong> {item.prediction}
                  </p>

                  <p>
                    <strong>Status :</strong> {item.status}
                  </p>

                  <p>
                    <strong>Confidence :</strong> {item.confidence}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>HCHO :</strong> {item.value}
                  </p>

                  <p>
                    <strong>Prediction :</strong> {item.prediction}
                  </p>

                  <p>
                    <strong>Status :</strong> {item.status}
                  </p>

                  <p>
                    <strong>Source :</strong> {item.source}
                  </p>

                  <p>
                    <strong>Confidence :</strong> {item.confidence}
                  </p>
                </>
              )}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default EarthMap;