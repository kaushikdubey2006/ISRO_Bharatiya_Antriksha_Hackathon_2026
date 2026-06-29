import { useState } from "react";
import {
  Settings,
  Moon,
  Clock3,
  Layers,
  CalendarClock,
} from "lucide-react";

function SettingsPanel() {
  const [prediction, setPrediction] = useState("24 Hours");
  const [layer, setLayer] = useState("AQI");
  const [refresh, setRefresh] = useState("30 min");

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <Settings
          size={30}
          className="text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Dashboard Settings
        </h2>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

          <div className="flex items-center gap-2">
            <Moon className="text-cyan-400" />
            <span className="font-semibold text-white">
              Theme
            </span>
          </div>

          <button className="mt-5 rounded-xl bg-cyan-500 px-6 py-2 text-white">
            Dark Mode
          </button>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

          <div className="flex items-center gap-2">
            <CalendarClock className="text-cyan-400" />
            <span className="font-semibold text-white">
              Prediction Horizon
            </span>
          </div>

          <select
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            className="mt-5 w-full rounded-xl bg-slate-800 p-3"
          >
            <option>24 Hours</option>
            <option>48 Hours</option>
          </select>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

          <div className="flex items-center gap-2">
            <Layers className="text-cyan-400" />
            <span className="font-semibold text-white">
              Default Layer
            </span>
          </div>

          <select
            value={layer}
            onChange={(e) => setLayer(e.target.value)}
            className="mt-5 w-full rounded-xl bg-slate-800 p-3"
          >
            <option>AQI</option>
            <option>HCHO</option>
            <option>Fire</option>
          </select>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

          <div className="flex items-center gap-2">
            <Clock3 className="text-cyan-400" />
            <span className="font-semibold text-white">
              Refresh Interval
            </span>
          </div>

          <select
            value={refresh}
            onChange={(e) => setRefresh(e.target.value)}
            className="mt-5 w-full rounded-xl bg-slate-800 p-3"
          >
            <option>15 min</option>
            <option>30 min</option>
            <option>60 min</option>
          </select>

        </div>

      </div>

    </div>
  );
}

export default SettingsPanel;