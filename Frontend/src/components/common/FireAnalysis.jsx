import { useEffect, useState } from "react";
import {
  Flame,
  AlertTriangle,
  TrendingUp,
  MapPinned,
} from "lucide-react";

import FireMap from "./FireMap";

function FireAnalysis() {

  const [stats, setStats] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/api/fire")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fire API Error");
        }
        return res.json();
      })
      .then((data) => {

        const activeFires = data.length;

        const highRisk = data.filter(
          (item) =>
            item.status === "High" ||
            item.status === "Critical"
        ).length;

        const affectedCities = new Set(
          data.map((item) => item.city)
        ).size;

        const avgBrightness =
          data.length > 0
            ? (
                data.reduce(
                  (sum, item) =>
                    sum + item.brightness,
                  0
                ) / data.length
              ).toFixed(1)
            : 0;

        setStats([
          {
            title: "Active Fires",
            value: activeFires,
            icon: (
              <Flame
                className="text-red-500"
                size={28}
              />
            ),
          },
          {
            title: "High Risk Regions",
            value: highRisk,
            icon: (
              <AlertTriangle
                className="text-orange-400"
                size={28}
              />
            ),
          },
          {
            title: "Affected Cities",
            value: affectedCities,
            icon: (
              <MapPinned
                className="text-cyan-400"
                size={28}
              />
            ),
          },
          {
            title: "Avg Brightness",
            value: avgBrightness,
            icon: (
              <TrendingUp
                className="text-green-400"
                size={28}
              />
            ),
          },
        ]);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        🔥 Fire Analysis
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2 h-[420px] overflow-hidden rounded-2xl border border-slate-700">
          <FireMap />
        </div>

        <div className="grid gap-4">

          {stats.map((item) => (

            <div
              key={item.title}s
              className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                {item.icon}

              </div>

              <h2 className="mt-4 text-4xl font-bold text-cyan-400">
                {item.value}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default FireAnalysis;