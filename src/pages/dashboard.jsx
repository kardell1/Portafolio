import CompContacto from "../components/Contacto";
import CompExperiencia from "../components/Experiencia";
import CompHabilidades from "../components/Habilidades";
import CompPresentacion from "../components/Presentacion";
function PageDashboard() {
  return (
    <>
      <div className="bg-slate-900">
        <CompPresentacion />
        <CompExperiencia />
        <CompHabilidades />
        <CompContacto />
      </div>
    </>
  );
}
export default PageDashboard;
