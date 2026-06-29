import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Wind,
  TriangleAlert,
} from "lucide-react";

function AIInsights({ view }) {

  const aqi = [
    {
      title: "Prediction",
      value: "AQI 201",
      icon: <TrendingUp className="text-cyan-400" size={26} />,
    },
    {
      title: "Confidence",
      value: "94%",
      icon: <ShieldCheck className="text-green-400" size={26} />,
    },
    {
      title: "Major Pollutant",
      value: "PM2.5",
      icon: <Wind className="text-orange-400" size={26} />,
    },
    {
      title: "Recommendation",
      value: "Avoid Outdoor Activity",
      icon: <TriangleAlert className="text-red-400" size={26} />,
    },
  ];

  const hcho = [
    {
      title: "Prediction",
      value: "3.02 mol/m²",
      icon: <TrendingUp className="text-cyan-400" size={26} />,
    },
    {
      title: "Confidence",
      value: "96%",
      icon: <ShieldCheck className="text-green-400" size={26} />,
    },
    {
      title: "Major Source",
      value: "Industrial Emissions",
      icon: <Brain className="text-purple-400" size={26} />,
    },
    {
      title: "Recommendation",
      value: "Monitor Industrial Zone",
      icon: <TriangleAlert className="text-red-400" size={26} />,
    },
  ];

  // Dynamic Data
  const data = view === "aqi" ? aqi : hcho;

  // Dynamic Title
  const title =
    view === "aqi"
      ? "AQI AI Insights"
      : "HCHO AI Insights";

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {data.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex items-center justify-between">
              {item.icon}
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-xl font-bold text-cyan-400">
              {item.value}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default AIInsights;