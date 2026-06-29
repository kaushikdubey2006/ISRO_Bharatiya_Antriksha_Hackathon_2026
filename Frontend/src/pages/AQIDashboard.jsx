import DashboardLayout from "../layouts/DashboardLayout";
import EarthMap from "../components/common/EarthMap";

function AQIDashboard() {
  return (
    <DashboardLayout module="aqi">

      {/* Page Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Surface AQI Prediction Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor, predict and analyze air quality using satellite
          observations and Artificial Intelligence.
        </p>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">Current AQI</p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            182
          </h2>

          <p className="mt-3 text-orange-400">
            Poor
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            24 Hour Prediction
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            201
          </h2>

          <p className="mt-3 text-red-400">
            Very Poor
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            AI Confidence
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            94%
          </h2>

          <p className="mt-3 text-green-400">
            High Accuracy
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            Pollution Trend
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            ↑
          </h2>

          <p className="mt-3 text-red-400">
            Increasing
          </p>
        </div>

      </div>

      {/* Interactive Earth Map */}

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Interactive Earth Map
          </h2>

          <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600 transition">
            Live Data
          </button>

        </div>

    <div className="h-[650px] w-full rounded-2xl overflow-hidden border border-slate-700">
    <EarthMap type="aqi" />
</div>

      </div>

      {/* Bottom Panels */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            AI Cause Analysis
          </h2>

          <ul className="space-y-4 text-slate-300">

            <li>🚗 Traffic Congestion — 35%</li>

            <li>🏭 Industrial Emissions — 28%</li>

            <li>🔥 Crop Burning — 18%</li>

            <li>🌬 Low Wind Speed — 12%</li>

            <li>🌡 Weather Conditions — 7%</li>

          </ul>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            AI Recommendations
          </h2>

          <ul className="space-y-4 text-slate-300">

            <li>✔ Restrict heavy vehicles.</li>

            <li>✔ Inspect industrial emissions.</li>

            <li>✔ Increase monitoring frequency.</li>

            <li>✔ Public health advisory.</li>

            <li>✔ Promote green transportation.</li>

          </ul>

        </div>

      </div>

      {/* Live Alerts */}

      <div className="mt-10 rounded-3xl border border-red-700 bg-red-950/40 p-6">

        <h2 className="mb-6 text-2xl font-bold text-red-400">
          Live Alerts
        </h2>

        <div className="space-y-4">

          <div className="rounded-xl border border-red-700 bg-slate-900 p-4">
            🚨 AQI expected to cross 200 in the next 24 hours.
          </div>

          <div className="rounded-xl border border-yellow-600 bg-slate-900 p-4">
            ⚠ Industrial emissions increasing across central India.
          </div>

          <div className="rounded-xl border border-cyan-700 bg-slate-900 p-4">
            🌍 Satellite monitoring active across all observation regions.
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AQIDashboard;