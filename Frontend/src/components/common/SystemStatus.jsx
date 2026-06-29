import {
  CheckCircle2,
  LoaderCircle,
  Satellite,
  Database,
  Cloud,
  Brain,
  Activity,
} from "lucide-react";

const status = [
  {
    title: "INSAT-3D",
    state: "Connected",
    color: "text-green-400",
    icon: <Satellite size={22} />,
  },
  {
    title: "Sentinel-5P",
    state: "Updated",
    color: "text-green-400",
    icon: <Satellite size={22} />,
  },
  {
    title: "CPCB Stations",
    state: "Live",
    color: "text-green-400",
    icon: <Database size={22} />,
  },
  {
    title: "MODIS Fire",
    state: "Processing",
    color: "text-yellow-400",
    icon: <LoaderCircle size={22} className="animate-spin" />,
  },
  {
    title: "ERA5 Weather",
    state: "Ready",
    color: "text-green-400",
    icon: <Cloud size={22} />,
  },
  {
    title: "CNN-LSTM Model",
    state: "Ready",
    color: "text-green-400",
    icon: <Brain size={22} />,
  },
];

function SystemStatus() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <Activity
          size={28}
          className="text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          System Status
        </h2>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {status.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-cyan-500"
          >

            <div className="flex items-center gap-3">

              <div className={item.color}>
                {item.icon}
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className={`text-sm ${item.color}`}>
                  {item.state}
                </p>

              </div>

            </div>

            <CheckCircle2
              className="text-green-400"
              size={22}
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default SystemStatus;