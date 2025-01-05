import NavBar from "./NavBar";
import Footer from "./Footer";
const Aside = () => {
  return (
    <section className="px-16 py-10 relative max-md:p-14  ">
      <div className="flex flex-col gap-4">
        <p className="text-[75px] max-md:text-[50px] font-bold tracking-wider ">
          Bienvenido<span className="text-emerald-500">:]</span>
        </p>
        <p className=" text-[25px] font-bold  tracking-wide">
          Mi nombre es <span className="text-emerald-500">David Silva</span>.
        </p>
        <p className=" text-sm  tracking-wide leading-relaxed text-slate-300">
          <br /> Soy{" "}
          <span className="text-emerald-500">desarrollador Fullstack</span> con
          base en Bolivia. <br /> He trabajado en una amplia gama de proyectos
          en los que he tenido la oportunidad de estar a cargo, lo que me ha
          permitido aprender todo el proceso y comprender la importancia de
          definir una buena arquitectura de proyecto.
        </p>
      </div>
      <NavBar />
      <Footer />
      <p className="absolute bottom-1 left-1 max-md:top-1  text-slate-500 text-xs h-min ">
        @Created by Kardell
      </p>
    </section>
  );
};

export default Aside;
