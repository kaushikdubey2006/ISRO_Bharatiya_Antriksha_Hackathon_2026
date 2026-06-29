import {
  Target,
  Gauge,
  Timer,
  Activity,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const metrics = [
  {
    title: "Model Accuracy",
    value: "94.8%",
    icon: <Target size={30} className="text-green-400" />,
  },
  {
    title: "RMSE",
    value: "12.41",
    icon: <Gauge size={30} className="text-cyan-400" />,
  },
  {
    title: "MAE",
    value: "8.37",
    icon: <Activity size={30} className="text-yellow-400" />,
  },
  {
    title: "Prediction Time",
    value: "1.8 sec",
    icon: <Timer size={30} className="text-purple-400" />,
  },
  {
    title: "R² Score",
    value: "0.96",
    icon: <TrendingUp size={30} className="text-blue-400" />,
  },
  {
    title: "Model Status",
    value: "Ready",
    icon: <CheckCircle size={30} className="text-green-400" />,
  },
];

function ModelPerformance() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Model Performance
      </h2>

      <p className="mt-2 text-slate-400">
        Performance metrics of the CNN-LSTM prediction model.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {metrics.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition hover:border-cyan-500"
          >

            <div className="flex justify-between items-center">

              {item.icon}

              <span className="text-3xl font-bold text-cyan-400">
                {item.value}
              </span>

            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {item.title}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ModelPerformance;