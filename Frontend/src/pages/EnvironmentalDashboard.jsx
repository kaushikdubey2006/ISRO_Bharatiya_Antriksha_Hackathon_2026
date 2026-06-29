import { useState } from "react";

import DashboardLayout from "../Layouts/DashboardLayout";
import EarthMap from "../components/common/EarthMap";
import SummaryCards from "../components/common/SummaryCards";
import MapLegend from "../components/common/MapLegend";
import AIInsights from "../components/common/AIInsights";
import FireAnalysis from "../components/common/FireAnalysis";
import DataSources from "../components/common/DataSources";
import Pipeline from "../components/common/Pipeline";
import SystemStatus from "../components/common/SystemStatus";
import ModelPerformance from "../components/common/ModelPerformance";
import Reports from "../components/common/Reports";
import SettingsPanel from "../components/common/SettingsPanel";

function EnvironmentalDashboard() {
  const [view, setView] = useState("aqi");

  return (
    <DashboardLayout>

      {/* Dashboard Header */}

      <div
        id="dashboard"
        className="mb-8 flex items-center justify-between"
      >

        <div>

          <h1 className="text-4xl font-bold text-white">
            Environmental Monitoring Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Surface AQI & HCHO Hotspot Monitoring over India
          </p>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => setView("aqi")}
            className={`rounded-xl px-6 py-2 font-semibold transition ${
              view === "aqi"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            AQI
          </button>

          <button
            onClick={() => setView("hcho")}
            className={`rounded-xl px-6 py-2 font-semibold transition ${
              view === "hcho"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            HCHO
          </button>

        </div>

      </div>

      {/* Summary Cards */}

      <SummaryCards view={view} />

      {/* Earth Map */}

      <div
        id="earth-map"
        className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6"
      >

        <h2 className="mb-4 text-2xl font-bold text-white">
          India Environmental Map
        </h2>

        <div className="h-[650px] overflow-hidden rounded-2xl">

          <EarthMap type={view} />

        </div>

      </div>

      {/* Map Legend */}

      <MapLegend view={view} />
            {/* AI Insights */}

      <div
        id="ai-insights"
        className="mt-8"
      >
        <AIInsights view={view} />
      </div>

      {/* Fire Analysis */}

      <div
        id="fire-analysis"
        className="mt-8"
      >
        <FireAnalysis />
      </div>

      {/* Data Sources */}

      <div
        id="data-sources"
        className="mt-8"
      >
        <DataSources />
      </div>

      {/* Pipeline */}

      <div
        id="pipeline"
        className="mt-8"
      >
        <Pipeline />
      </div>

      {/* System Status */}

      <div
        id="system-status"
        className="mt-8"
      >
        <SystemStatus />
      </div>

      {/* Model Performance */}

      <div
        id="model-performance"
        className="mt-8"
      >
        <ModelPerformance />
      </div>

      {/* Reports */}

      <div
        id="reports"
        className="mt-8"
      >
        <Reports />
      </div>

      {/* Settings */}

      <div
        id="settings"
        className="mt-8"
      >
        <SettingsPanel />
      </div>

    </DashboardLayout>
  );
}

export default EnvironmentalDashboard;