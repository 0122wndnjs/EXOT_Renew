import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

import MainPage from "./pages/MainPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#1f1200",
              color: "white",
              border: "1px solid rgba(255,180,80,0.4)",
            },
          }}
        />

        <Header />

        <main>
          <Routes>
            {/* ✅ 메인 랜딩 페이지 */}
            <Route path="/" element={<MainPage />} />

            {/* ✅ 준비중 페이지들 */}
            <Route path="/dao" element={<ComingSoon title="EXOT DAO" />} />
            <Route path="/staking" element={<ComingSoon title="EXOT Staking" />} />
            <Route path="/onboarding" element={<ComingSoon title="Onboarding EXOT" />} />
            <Route path="/get-exot" element={<ComingSoon title="Get EXOT" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
