# 🌍 AI-Based Environmental Decision Support System (AI-EDSS)

## 🚀 Overview

AI-Based Environmental Decision Support System (AI-EDSS) is an intelligent web-based platform developed for the **ISRO Bharatiya Antariksh Hackathon (BAH) 2026**. The system integrates environmental datasets with Artificial Intelligence to monitor and analyze environmental conditions across India.

The platform provides real-time visualization and analysis of:

* 🌫 Air Quality Index (AQI)
* 🧪 Formaldehyde (HCHO) Hotspots
* 🔥 Fire Hotspots
* 🤖 AI-Based Environmental Insights
* 📊 Interactive Maps & Reports

The primary objective is to assist environmental monitoring agencies and decision-makers with an intuitive dashboard powered by AI.

---

# ✨ Features

## 🌫 AQI Monitoring

* Real-time AQI visualization
* Interactive India Map
* AQI Prediction
* Air Quality Status
* Confidence Score

---

## 🧪 HCHO Monitoring

* HCHO Hotspot Detection
* Concentration Visualization
* Pollution Source Information
* Environmental Risk Classification

---

## 🔥 Fire Hotspot Monitoring

* Fire Hotspot Detection
* Brightness Analysis
* Fire Radiative Power (FRP)
* Fire Severity Classification
* Satellite Information

---

## 🤖 AI Insights

* Environmental Predictions
* Pollution Analysis
* Confidence Estimation
* AI Recommendations

---

## 📍 Interactive Maps

* Leaflet Maps
* Dynamic Marker Visualization
* Popup Information
* Multiple Environmental Layers

---

## 📄 Reports

* Environmental Summary
* PDF Export (Future Scope)
* CSV Export (Future Scope)

---

# 🛰 Data Sources

* CPCB (Air Quality)
* Sentinel Satellite Data
* NASA FIRMS Fire Data (Demo Dataset)
* Environmental Monitoring Stations

---

# 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Leaflet
* Lucide Icons

### Backend

* Flask
* Flask-CORS
* Pandas

### Language

* Python
* JavaScript

### Data Format

* CSV Files

---

# 📂 Project Structure

```
ISRO_HACKATHON
│
├── Backend
│   ├── datasets
│   │   ├── AQI.csv
│   │   ├── HCHO.csv
│   │   └── fire.csv
│   │
│   ├── routes
│   │   ├── aqi.py
│   │   ├── hcho.py
│   │   ├── fire.py
│   │   └── reports.py
│   │
│   └── app.py
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd Backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

Backend will run on:

```
http://https://aerosynq-isro.onrender.com
```

---

## Frontend

```bash
cd Frontend

npm install

npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔌 API Endpoints

| Endpoint      | Description   |
| ------------- | ------------- |
| `/api/aqi`    | AQI Dataset   |
| `/api/hcho`   | HCHO Dataset  |
| `/api/fire`   | Fire Hotspots |
| `/api/report` | Reports       |

---

# 🎯 Objectives

* Improve environmental monitoring
* Visualize satellite-based environmental data
* Support AI-assisted decision making
* Provide interactive environmental dashboards
* Enable data-driven environmental analysis

---

# 📈 Future Scope

* Live ISRO Bhuvan Integration
* Satellite API Integration
* Machine Learning Forecasting
* Weather Prediction Integration
* Mobile Application
* PDF & CSV Report Generation
* Historical Trend Analysis

---

# 👨‍💻 Developed For

**ISRO Bharatiya Antariksh Hackathon (BAH) 2026**

---

# 📜 License

This project is developed for educational and hackathon purposes.
