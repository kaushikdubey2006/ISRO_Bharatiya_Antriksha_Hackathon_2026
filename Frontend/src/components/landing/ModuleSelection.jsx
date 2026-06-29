import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ModuleSelection() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-4xl font-bold text-white">
          Integrated Environmental Monitoring System
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          Access all environmental intelligence features through a single AI-powered dashboard.
        </p>

      </div>

      {/* Single Dashboard Card */}

      <div className="mx-auto mt-16 max-w-5xl">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">

          <div className="text-center text-6xl">
            🌍
          </div>

          <h3 className="mt-6 text-center text-3xl font-bold text-white">
            AI Based Environmental Decision Support System
          </h3>

          <p className="mt-6 text-center leading-8 text-slate-400">
            A unified platform for monitoring Air Quality Index (AQI),
            Formaldehyde (HCHO) Hotspots, Fire Hotspots, AI-generated
            Environmental Insights and Interactive Reports across India.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
              ✔ Real-Time AQI Monitoring
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
              ✔ HCHO Hotspot Detection
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
              ✔ Fire Hotspot Monitoring
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
              ✔ AI Prediction & Environmental Insights
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
              ✔ Interactive India Environmental Map
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
              ✔ Download PDF & CSV Reports
            </div>

          </div>

          {/* Button */}

          <Button
            className="mt-10 w-full bg-cyan-500 text-white hover:bg-cyan-600"
            onClick={() => navigate("/dashboard")}
          >
            Launch Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

      </div>

    </section>
  );
}

export default ModuleSelection;