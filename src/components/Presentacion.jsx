import { useState } from "react";
import perfil from "../assets/images/netero.jpeg";
function CompPresentacion() {
  window.addEventListener("load", function () {
    // Tu código a ejecutar cuando la página se carga por primera vez
    console.log("La página se ha cargado por primera vez.");
  });
  const [pivote, setPivote] = useState(false);
  const [texto, setTexto] = useState("");
  const handleFocus = () => {
    console.log(pivote);
    setPivote(!pivote);
    if (pivote) {
      setTexto("");
    } else {
      setTexto(
        "Most of the pages I have created I did both fronted and backend, also the deployment and construction of the database I'm probably a full-stack developer"
      );
    }
  };

  return (
    <>
      <section className="h-screen max-sm:h-auto flex justify-between items-center  relative max-sm:flex-col ">
        <div className={`ml-10 text-slate-50 `}>
          <h1 className=" font-semibold text-7xl py-6  ">
            My name is <span className="text-emerald-500">Kevin Silva</span>{" "}
          </h1>
          <p
            onMouseEnter={handleFocus}
            onMouseLeave={handleFocus}
            className="text-4xl py-6 px-1 w-max "
          >
            I am fullstack developer <span className="text-emerald-500">?</span>
          </p>
        </div>
        <div className="px-2 overflow-hidden  max-sm:order-first max-sm:py-2 ">
          <div className="perb   ">
            {/* <img src={perfil} width={400} alt="" /> */}
          </div>
        </div>
        <p className="absolute w-2/6 ml-10 text-slate-50 text-xs bottom-16 max-sm:text-transparent max-sm:w-2/4  ">
          {texto}
        </p>
      </section>
    </>
  );
}
export default CompPresentacion;
