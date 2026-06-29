import {
  LayoutDashboard,
  Globe,
  Brain,
  Flame,
  Database,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    id: "dashboard",
  },
  {
    name: "Environmental Map",
    icon: <Globe size={20} />,
    id: "earth-map",
  },
  {
    name: "AI Insights",
    icon: <Brain size={20} />,
    id: "ai-insights",
  },
  {
    name: "Fire Analysis",
    icon: <Flame size={20} />,
    id: "fire-analysis",
  },
  {
    name: "Data Sources",
    icon: <Database size={20} />,
    id: "data-sources",
  },
  {
    name: "Reports",
    icon: <FileText size={20} />,
    id: "reports",
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    id: "settings",
  },
];

function Sidebar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="w-72 min-h-[calc(100vh-80px)] border-r border-slate-800 bg-slate-900 sticky top-20 overflow-y-auto">

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-cyan-400">
          Environmental
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Monitoring System
        </p>

      </div>

      <nav className="px-4 py-4">

        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:translate-x-1"
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}

      </nav>

      <div className="mt-auto border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-800 p-4">

          <h3 className="font-semibold text-cyan-400">
            Active Layers
          </h3>

          <div className="mt-3 space-y-2 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-400">AQI</span>
              <span className="text-green-400">● Live</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">HCHO</span>
              <span className="text-green-400">● Live</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Fire</span>
              <span className="text-green-400">● Live</span>
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;