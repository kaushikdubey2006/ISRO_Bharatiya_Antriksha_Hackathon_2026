import {
  Satellite,
  Database,
  Flame,
  CloudSun,
  CheckCircle2,
} from "lucide-react";

function DataSources() {
  const sources = [
    {
      title: "INSAT-3D",
      subtitle: "AOD Satellite Data",
      icon: <Satellite className="text-cyan-400" size={28} />,
    },
    {
      title: "Sentinel-5P",
      subtitle: "HCHO / NO₂ / SO₂ / CO / O₃",
      icon: <Satellite className="text-green-400" size={28} />,
    },
    {
      title: "CPCB",
      subtitle: "Ground AQI Stations",
      icon: <Database className="text-orange-400" size={28} />,
    },
    {
      title: "MODIS / VIIRS",
      subtitle: "Fire Count Dataset",
      icon: <Flame className="text-red-400" size={28} />,
    },
    {
      title: "ERA5 / IMDAA",
      subtitle: "Meteorological Data",
      icon: <CloudSun className="text-yellow-400" size={28} />,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Data Sources
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {sources.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-cyan-500"
          >
            <div className="flex items-center justify-between">

              {item.icon}

              <CheckCircle2
                className="text-green-500"
                size={22}
              />

            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.subtitle}
            </p>

            <p className="mt-4 text-green-400 text-sm">
              Connected
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DataSources;