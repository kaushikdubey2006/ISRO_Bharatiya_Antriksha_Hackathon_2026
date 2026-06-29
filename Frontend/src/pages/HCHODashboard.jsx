import DashboardLayout from "../layouts/DashboardLayout";
import EarthMap from "../components/common/EarthMap";

function HCHODashboard() {
  return (
    <DashboardLayout module="hcho">

      {/* Page Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          HCHO Hotspot Detection Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor formaldehyde concentration, detect hotspot regions,
          identify emission sources, and analyze atmospheric pollution
          using satellite observations and Artificial Intelligence.
        </p>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">Current HCHO</p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            1.82
          </h2>

          <p className="mt-3 text-orange-400">
            Moderate
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            24 Hour Prediction
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            2.04
          </h2>

          <p className="mt-3 text-red-400">
            Increasing
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            AI Confidence
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            96%
          </h2>

          <p className="mt-3 text-green-400">
            High Accuracy
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            Hotspot Trend
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            ↑
          </h2>

          <p className="mt-3 text-red-400">
            Rising
          </p>
        </div>

      </div>

      {/* Earth Map */}

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            HCHO Interactive Earth Map
          </h2>

          <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600">
            Live Data
          </button>

        </div>

        <div className="h-[650px] w-full rounded-2xl overflow-hidden border border-slate-700">
    <EarthMap type="hcho" />
</div>

      </div>

      {/* Bottom Panels */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Source Analysis
          </h2>

          <ul className="space-y-4 text-slate-300">

            <li>🏭 Industrial Emissions — 46%</li>
            <li>🔥 Biomass Burning — 23%</li>
            <li>🚗 Vehicle Emissions — 14%</li>
            <li>🧪 Chemical Industries — 10%</li>
            <li>🌡 Weather Impact — 7%</li>

          </ul>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            AI Recommendations
          </h2>

          <ul className="space-y-4 text-slate-300">

            <li>✔ Inspect industrial emission zones.</li>
            <li>✔ Monitor biomass burning regions.</li>
            <li>✔ Increase satellite monitoring frequency.</li>
            <li>✔ Deploy field inspection teams.</li>
            <li>✔ Notify environmental authorities.</li>

          </ul>

        </div>

      </div>

      {/* Alerts */}

      <div className="mt-10 rounded-3xl border border-red-700 bg-red-950/40 p-6">

        <h2 className="mb-6 text-2xl font-bold text-red-400">
          Live Alerts
        </h2>

        <div className="space-y-4">

          <div className="rounded-xl border border-red-700 bg-slate-900 p-4">
            🚨 High HCHO concentration detected near industrial corridor.
          </div>

          <div className="rounded-xl border border-yellow-600 bg-slate-900 p-4">
            ⚠ Biomass burning activity increasing.
          </div>

          <div className="rounded-xl border border-cyan-700 bg-slate-900 p-4">
            🌍 Satellite monitoring active across hotspot regions.
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default HCHODashboard;