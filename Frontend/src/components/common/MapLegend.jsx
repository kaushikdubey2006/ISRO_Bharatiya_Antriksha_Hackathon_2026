function MapLegend({ view }) {
  const aqiLegend = [
    {
      color: "#22c55e",
      label: "Good (0-50)",
    },
    {
      color: "#eab308",
      label: "Satisfactory (51-100)",
    },
    {
      color: "#f97316",
      label: "Moderate (101-200)",
    },
    {
      color: "#ef4444",
      label: "Poor (201-300)",
    },
    {
      color: "#9333ea",
      label: "Severe (301+)",
    },
  ];

  const hchoLegend = [
    {
      color: "#22c55e",
      label: "Low",
    },
    {
      color: "#eab308",
      label: "Moderate",
    },
    {
      color: "#f97316",
      label: "High",
    },
    {
      color: "#9333ea",
      label: "Critical",
    },
  ];

  const legend = view === "aqi" ? aqiLegend : hchoLegend;

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <h3 className="mb-4 text-lg font-bold text-white">
        {view === "aqi"
          ? "AQI Classification"
          : "HCHO Classification"}
      </h3>

      <div className="flex flex-wrap gap-6">

        {legend.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            <div
              className="h-5 w-5 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span className="text-slate-300">
              {item.label}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MapLegend;