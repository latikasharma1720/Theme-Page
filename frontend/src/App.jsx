import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";

// Guest pages
import Home from "./pages/guest/Home.jsx";
import About from "./pages/guest/About.jsx";
import Services from "./pages/guest/Services.jsx";  // NEW
import Pricing from "./pages/guest/Pricing.jsx";    // NEW
import FAQ from "./pages/guest/FAQ.jsx";            // NEW
import Signup from "./pages/guest/Signup.jsx";
import Login from "./pages/guest/Login.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* renamed /how -> /services; keep a redirect so old links still work */}
        <Route path="/services" element={<Services />} />
        <Route path="/how" element={<Navigate to="/services" replace />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<div style={{ padding: 40 }}>Page not found</div>} />
      </Route>
    </Routes>
  );
}
