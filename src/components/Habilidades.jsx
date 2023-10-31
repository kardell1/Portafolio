import {
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiPhp,
  DiReact,
  DiJava,
  DiDatabase,
  DiLaravel,
  DiCss3,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
function CompHabilidades() {
  return (
    <>
      <section className="flex flex-col text-slate-100 py-10 gap-5  ">
        <div className="flex justify-center font-semibold text-5xl pt-5 text-emerald-500 ">
          <p>Skills</p>
        </div>
        <div className="h-max grid grid-cols-7 gap-2 max-sm:grid-cols-4 text-orange-500">
          <div className=" flex flex-col justify-center items-center hover:text-orange-700">
            <DiHtml5 className="text-6xl " />
            <p className="text-center">Html</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-slate-400">
            <DiDatabase className="text-6xl " />
            <p className="text-center">MySql</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-sky-700">
            <DiCss3 className="text-6xl" />
            <p className="text-center">Css</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-red-100">
            <DiJava className="text-6xl " />
            <p className="text-center">Java</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-slate-400">
            <DiPhp className="text-6xl" />
            <p className="text-center">Php</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-yellow-500">
            <DiJavascript1 className="text-6xl " />
            <p className="text-center">JavaScript</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-green-700">
            <SiExpress className="text-6xl " />
            <p className="text-center">Express</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-blue-700">
            <DiReact className="text-6xl " />
            <p className="text-center">React.js</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-slate-950">
            <DiGithubBadge className="text-6xl " />
            <p className="text-center">Git</p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:text-red-800">
            <DiLaravel className="text-6xl " />
            <p className="text-center">Laravel</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default CompHabilidades;
