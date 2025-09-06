import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavbarPro from "./components/NavbarPro";
import Login from "./components/Login";
import Logout from "./components/Logout";
import DashboardPro from "./components/Dashboards";
import PlanAlumnoPro from "./components/PlanAlumnoPro";
import AltaPlanPro from "./components/AltaPlan";
// import Plans from "./components/Plans";
// import PlansPage from "./components/PlansPage";
// import WorkoutDay from "./components/WorkoutDay";
export default function App() {
  return (
    <BrowserRouter>
     <NavbarPro />
      {/* <nav style={{ padding: 10, background: "#0ea5a6", color: "#fff" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/plans" style={{ marginRight: 10 }}>
          Planes
        </Link>
        <Link to="/workout">Workout</Link>
        <Link>
          <button onClick={() => (window.location.href = "/logout")}>
            Logout
          </button>
        </Link>
      </nav> */}

      <Routes>
         <Route path="/" element={<DashboardPro />} />
        <Route path="/plan-alumno" element={<PlanAlumnoPro />} />
        <Route path="/alta-plan" element={<AltaPlanPro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/plans" element={<Plans />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
