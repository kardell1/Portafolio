import { Routes, Route } from "react-router-dom";
import PageDashboard from "./pages/dashboard.jsx";
function RutasPage() {
  /* aca debemos envolver las rutas del proyecto */
  return (
    <>
      <Routes>
        <Route path="/" element={<PageDashboard />} />
      </Routes>
    </>
  );
}
export default RutasPage;
