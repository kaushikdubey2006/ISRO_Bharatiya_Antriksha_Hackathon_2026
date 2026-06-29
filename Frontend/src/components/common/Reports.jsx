import {
  FileText,
  Download,
  FileSpreadsheet,
  FileBarChart2,
} from "lucide-react";

const reports = [
  {
    title: "Prediction Report",
    desc: "AQI & HCHO Forecast Summary",
    icon: <FileText size={34} className="text-cyan-400" />,
    button: "Generate",
  },
  {
    title: "Export CSV",
    desc: "Download prediction dataset",
    icon: <FileSpreadsheet size={34} className="text-green-400" />,
    button: "Download",
  },
  {
    title: "Performance Report",
    desc: "Model evaluation metrics",
    icon: <FileBarChart2 size={34} className="text-purple-400" />,
    button: "View",
  },
];

function Reports() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Reports
      </h2>

      <p className="mt-2 text-slate-400">
        Generate and export environmental prediction reports.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {reports.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition hover:border-cyan-500"
          >

            {item.icon}

            <h3 className="mt-5 text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-400">
              {item.desc}
            </p>

            <button
              className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400"
            >
              <Download size={18} />
              {item.button}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Reports;