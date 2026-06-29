import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 min-h-screen bg-slate-950 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;