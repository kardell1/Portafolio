import { useEffect } from "react";
function Cardcomponent(props) {
  let element;
  useEffect(() => {
    element = document.getElementById(props.elementoDoom);
    element.scrollIntoView({ behavior: "smooth" });
  }, [props.elementoDoom]);
  return (
    <>
      <section className="  text-slate-400 ">
        <div className="  flex flex-col gap-6 ">
          <div id="about" className=" ">
            In 2022, I decided to take a more serious approach towards
            programming, which allowed me to significantly advance my
            development as a programmer. <br /> During this period, I have had
            the opportunity to work on projects related to the
            <span className="text-slate-200">
              {" "}
              Internet of Things (IoT){" "}
            </span>{" "}
            and <span className="text-slate-200">
              {" "}
              create control pages{" "}
            </span>{" "}
            for small businesses, this experience has provided me with valuable
            skills and knowledge in the field of programming and has allowed me
            to apply my skills in real-world situations. <br /> My current main
            goal is to evolve from amateur software development to a more
            professional level, focusing on learning and{" "}
            <span className="text-slate-200">
              {" "}
              applying quality standards.{" "}
            </span>{" "}
            <br /> I aspire to develop software following industry best
            practices and standards to ensure the quality and effectiveness of
            the programs I create. This transition will allow me to not only
            improve my skills as a developer, but also deliver more reliable and
            robust software solutions. <br />
          </div>
          <div
            id="exp"
            className="flex hover:bg-slate-500/5 p-2 rounded-md hover:text-emerald-400 text-slate-200 max-sm:flex-col "
          >
            <div className="w-1/3 text-slate-400 max-sm:w-full ">
              May - Jun 2023
            </div>
            <div className="w-2/3 flex flex-col gap-3 max-sm:w-full">
              <p className="font-medium">Developer FullStack</p>
              <p className="font-medium">MachineLearning</p>
              <p className="  text-slate-400 ">
                The main objective of this project is to design and develop a
                robust system that is capable of taking data from different
                types of sensors, these data are taken in real time, account
                with storage of historical records and the generation of reports
                that facilitate decision making.
              </p>
              <p className=" font-medium">Tecnologies :</p>
              <div className="flex flex-wrap gap-3 items-center">
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  React.js
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Express.js
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  MySql
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  TailwindCss
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  HiveMq
                </p>
              </div>
            </div>
          </div>
          <div className="flex hover:bg-slate-500/5 p-2 rounded-md hover:text-emerald-400 text-slate-200  max-sm:flex-col">
            <div className="w-1/3 text-slate-400 max-sm:w-full ">
              Sept - Oct 2023
            </div>
            <div className="w-2/3 flex flex-col gap-3 max-sm:w-full">
              <p className=" font-medium">Developer FullStack</p>
              <p className=" font-medium">MachineLearning</p>
              <p className="text-slate-400">
                The main objective of this project is to receive information
                from sensors and, depending on the type of information received,
                activate machinery. <br />
                However, the functionality is not limited only to activation
                based on sensor data, since it is also possible to activate
                machinery through through the system administration interface.
                To effectively manage data, all information received is stored
                in a local database. <br />
                This storage is essential, as it allows the generation of graphs
                and visualizations that represent the data captured by each
                sensor. <br />
                These visual representations play a key role in providing a
                detailed understanding of measurements, trends and patterns,
                facilitating informed decision making.
              </p>
              <p className=" font-medium">Tecnologies :</p>
              <div className="flex flex-wrap gap-3 items-center">
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Vite.
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Express.js
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Css
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Mosquitto
                </p>
              </div>
            </div>
          </div>
          <div className="flex hover:bg-slate-500/5 p-2 rounded-md hover:text-emerald-400 text-slate-200  max-sm:flex-col">
            <div className="w-1/3 text-slate-400 max-sm:w-full">
              Oct - Nov 2023{" "}
            </div>
            <div className="w-2/3 flex flex-col gap-3 max-sm:w-full">
              <p className="font-medium">Developer FullStack</p>
              <p className="font-medium">Rhapaella</p>
              <p className="text-slate-400">
                The objective of this project was to create a webpage that
                serves as an online catalog for a company. The page includes a
                login section for administrators and customers. Customers have
                the ability to modify the catalog's content from a control
                panel. Additionally, they are provided with the option to upload
                an Excel file, which simplifies data migration to the page and
                allows it to be used as a foundation for the catalog.
              </p>
              <p className="font-medium">Tecnologies :</p>
              <div className="flex flex-wrap gap-3 items-center">
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Laravel
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  Css
                </p>
                <p className="text-emerald-400 w-auto px-2 py-1  rounded-2xl bg-slate-50/5">
                  MySql
                </p>
              </div>
            </div>
          </div>
          <div id="proy">
            <p>in developing</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cardcomponent;
