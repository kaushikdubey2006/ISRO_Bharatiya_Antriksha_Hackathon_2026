import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function LandingLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default LandingLayout;