import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EnvironmentalDashboard from "./pages/EnvironmentalDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<EnvironmentalDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;