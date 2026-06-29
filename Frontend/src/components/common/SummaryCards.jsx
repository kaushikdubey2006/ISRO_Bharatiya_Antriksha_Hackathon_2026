function SummaryCards({ view }) {
  const aqi = [
    {
      title: "Current AQI",
      value: "182",
      status: "Poor",
      color: "text-orange-400",
    },
    {
      title: "Predicted AQI",
      value: "201",
      status: "Very Poor",
      color: "text-red-400",
    },
    {
      title: "AI Confidence",
      value: "94%",
      status: "High Accuracy",
      color: "text-green-400",
    },
    {
      title: "Pollution Trend",
      value: "↑",
      status: "Increasing",
      color: "text-red-400",
    },
  ];

  const hcho = [
    {
      title: "Current HCHO",
      value: "2.84",
      status: "High",
      color: "text-orange-400",
    },
    {
      title: "Predicted HCHO",
      value: "3.02",
      status: "Very High",
      color: "text-red-400",
    },
    {
      title: "Detected Hotspots",
      value: "257",
      status: "MODIS Fire Linked",
      color: "text-green-400",
    },
    {
      title: "Source Regions",
      value: "18",
      status: "Identified",
      color: "text-cyan-400",
    },
  ];

  const cards = view === "aqi" ? aqi : hcho;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <p className="text-slate-400">{card.title}</p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            {card.value}
          </h2>

          <p className={`mt-3 ${card.color}`}>
            {card.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;