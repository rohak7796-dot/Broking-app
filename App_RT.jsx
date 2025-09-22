Member 7 – App Routing (Main App.jsx)
// --- Member 7 START ---
// File: App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import OTPVerification from "./OTPVerification";
import DashboardHeader from "./DashboardHeader";
import MarketIndices from "./MarketIndices";
import StockSearch from "./StockSearch";
import StockDetail from "./StockDetail";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/dashboard" element={
          <div>
            <DashboardHeader />
            <div className="p-6 space-y-6">
              <MarketIndices />
              <StockSearch />
            </div>
          </div>
        } />
        <Route path="/stock/:symbol" element={<StockDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
