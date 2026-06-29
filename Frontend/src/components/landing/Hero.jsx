import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "../common/StatCard";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          <Globe2 className="h-4 w-4" />
          <span>ISRO Hackathon 2026</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          AI-Based Environmental
          <span className="block text-cyan-400">
            Decision Support System
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          An intelligent platform that integrates satellite observations,
          weather information, ground monitoring stations, and Artificial
          Intelligence to predict Air Quality Index (AQI), detect HCHO
          hotspots, analyze pollution sources, and support environmental
          decision-making.
        </p>

        
        {/* Launch Dashboard Button */}

<div className="mt-12 flex items-center justify-center">

  <Button
    size="lg"
    className="rounded-xl bg-cyan-500 px-10 py-6 text-lg font-semibold hover:bg-cyan-600"
    onClick={() => navigate("/dashboard")}
  >
    Launch Dashboard
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>

</div>
        {/* Stats */}
        <div className="mt-24 grid w-full max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">

          <StatCard
            icon="🛰"
            value="6+"
            title="Satellite Sources"
          />

          <StatCard
            icon="🌫"
            value="24–48h"
            title="AQI Forecast"
          />

          <StatCard
            icon="🤖"
            value="AI"
            title="Explainable Analysis"
          />

          <StatCard
            icon="🌍"
            value="Global"
            title="Earth Monitoring"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;