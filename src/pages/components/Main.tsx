import AboutMe from "../sections/AboutMe";
import Experience from "../sections/Experience";
import Proyects from "../sections/Proyects";
import Tecnologies from "../sections/Tecnologies";

const Main = () => {
  return (
    <section className="px-16 py-10 flex flex-col gap-10 text-slate-400 max-h-screen overflow-y-auto max-sm:p-10 ">
      <AboutMe/>
      <Experience/>
      <Proyects/>
      <Tecnologies/>
    </section>
  );
};

export default Main;
