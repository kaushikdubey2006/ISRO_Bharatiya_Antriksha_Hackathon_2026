import {
  Satellite,
  Database,
  Cloud,
  Flame,
  Brain,
  BarChart3,
  ArrowDown,
} from "lucide-react";

const pipeline = [
  {
    title: "INSAT-3D",
    desc: "AOD Satellite Data",
    icon: <Satellite size={34} className="text-cyan-400" />,
  },
  {
    title: "Sentinel-5P",
    desc: "NO₂ • SO₂ • CO • O₃ • HCHO",
    icon: <Satellite size={34} className="text-green-400" />,
  },
  {
    title: "CPCB",
    desc: "Ground AQI Stations",
    icon: <Database size={34} className="text-yellow-400" />,
  },
  {
    title: "MODIS / VIIRS",
    desc: "Fire Detection",
    icon: <Flame size={34} className="text-red-500" />,
  },
  {
    title: "ERA5",
    desc: "Meteorological Data",
    icon: <Cloud size={34} className="text-sky-400" />,
  },
];

function Pipeline() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Environmental Prediction Pipeline
      </h2>

      <p className="mt-3 text-slate-400">
        Complete workflow from satellite observations to AQI prediction
        and HCHO hotspot monitoring.
      </p>

      {/* Input Sources */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        {pipeline.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:border-cyan-500 hover:-translate-y-1"
          >

            <div className="flex justify-center">
              {item.icon}
            </div>

            <h3 className="mt-5 text-center text-lg font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-center text-sm text-slate-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      {/* Arrow */}

      <div className="my-10 flex justify-center">
        <ArrowDown
          size={45}
          className="text-cyan-400 animate-bounce"
        />
      </div>

      {/* Preprocessing */}

      <div className="mx-auto max-w-xl rounded-2xl border border-cyan-500 bg-cyan-500/10 p-8">

        <h3 className="text-center text-2xl font-bold text-cyan-400">
          Data Preprocessing
        </h3>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            Missing Values
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            Normalization
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            Feature Engineering
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            Temporal Sequence
          </div>

        </div>

      </div>

      {/* Arrow */}

      <div className="my-10 flex justify-center">
        <ArrowDown
          size={45}
          className="text-cyan-400 animate-bounce"
        />
      </div>

      {/* CNN-LSTM */}

      <div className="mx-auto max-w-md rounded-2xl border border-purple-500 bg-purple-500/10 p-8">

        <div className="flex justify-center">

          <Brain
            size={50}
            className="text-purple-400"
          />

        </div>

        <h2 className="mt-5 text-center text-3xl font-bold text-white">
          CNN-LSTM Hybrid Model
        </h2>

        <p className="mt-3 text-center text-slate-400">
          Spatial + Temporal Deep Learning for environmental prediction
        </p>

      </div>

      {/* Arrow */}

      <div className="my-10 flex justify-center">
        <ArrowDown
          size={45}
          className="text-cyan-400 animate-bounce"
        />
      </div>

      {/* Output */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-green-500 bg-green-500/10 p-8">

          <BarChart3
            size={42}
            className="text-green-400"
          />

          <h3 className="mt-5 text-2xl font-bold text-white">
            AQI Prediction
          </h3>

          <p className="mt-3 text-slate-400">
            24–48 hour Air Quality Index prediction using multi-source
            satellite observations and meteorological inputs.
          </p>

        </div>

        <div className="rounded-2xl border border-red-500 bg-red-500/10 p-8">

          <Flame
            size={42}
            className="text-red-400"
          />

          <h3 className="mt-5 text-2xl font-bold text-white">
            HCHO Hotspot Detection
          </h3>

          <p className="mt-3 text-slate-400">
            Detect high-risk Formaldehyde hotspots and pollution regions
            across India.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Pipeline;