import { BsDiscord, BsLinkedin } from "react-icons/bs";
import Cardcomponent from "../components/Card";
import { useState } from "react";
import { FaGithub, FaSquareFacebook } from "react-icons/fa6";
function IndexPage() {
  const [view, setView] = useState("inicio");
  //NOTA------------- para hacer visible el servidor localmente se debe usar esto ... npm run dev -- --host 0.0.0.0
  return (
    <>
      <section className="h-max relative bgFondo text-slate-100   grid grid-cols-2 max-md:grid-cols-1 ">
        <div className=""></div>
        <aside
          id="inicio"
          className=" fixed  w-2/4  h-full max-md:relative max-md:w-full  "
        >
          <div className="relative  flex h-full  gap-2  flex-col justify-around p-20 max-md:p-10">
            <div className="flex flex-col gap-6 font-semibold ">
              <h1 className="text-7xl max-sm:text-5xl">
                Welcome <span className="text-emerald-400">:)</span>{" "}
              </h1>
              <h2 className="text-4xl max-sm:text-2xl py-2 ">
                My name is <span className="text-emerald-400">Kevin Silva</span>{" "}
              </h2>
              <p className="font-normal text-slate-400 w-3/4 py-3">
                I am probably a FullStack programmer, I have developed
                management programs and IoT programs.
              </p>
              <div className="flex flex-col  font-medium">
                <div className="subRayado w-fit">
                  <button
                    onClick={() => {
                      setView("about");
                    }}
                  >
                    About me
                  </button>
                </div>
                <div className="subRayado w-fit py-2">
                  <button
                    onClick={() => {
                      setView("exp");
                    }}
                  >
                    Experience
                  </button>
                </div>
                <div className="subRayado w-fit">
                  <button
                    onClick={() => {
                      setView("proy");
                    }}
                  >
                    Proyects
                  </button>
                </div>
              </div>
              <div className="flex w-max pt-4 gap-3 ">
                <div className=" w-max    hover:text-emerald-500 transition duration-500 ease-in-out items-center cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/KSilvaR1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin className="text-3xl  " />
                  </a>
                </div>
                <div className=" w-max    hover:text-emerald-500 transition duration-500 ease-in-out items-center cursor-pointer">
                  <a
                    href="https://discordapp.com/users/513783255951081483"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsDiscord className="text-3xl" />
                  </a>
                </div>
                <div className=" w-max    hover:text-emerald-500 transition duration-500 ease-in-out items-center cursor-pointer">
                  <a
                    href="https://www.facebook.com/kevin.silvarodriguez.1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareFacebook className="text-3xl" />
                  </a>
                </div>
                <div className=" w-max    hover:text-emerald-500 transition duration-500 ease-in-out items-center cursor-pointer">
                  <a
                    href="https://github.com/kardell1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="absolute bottom-0 left-0 font-extralight text-xs text-slate-400 p-2">
            @2023-ALL RIGHTS RESERVED by KARDELL{" "}
          </p>
        </aside>

        <div className=" p-20 max-md:p-10">
          <div className="  ">
            <Cardcomponent elementoDoom={view} />
          </div>
        </div>
      </section>
    </>
  );
}
export default IndexPage;
