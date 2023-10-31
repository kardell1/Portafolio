import imagen from "../assets/images/ControladorSensoresArreglado.png";
import imagen2 from "../assets/images/ControladorSensoresProDashboardArreglado.png";
import controllPageImagen from "../assets/images/ControllPage.png"
function CompExperiencia() {
  return (
    <>
      <section className="h-auto flex items-center ">
        <div className="pb-16 text-lg text-orange-600 overflow-hidden">
          <p className="text-center text-5xl text-emerald-500 font-semibold py-14 ">
            Proyects
          </p>
          {/* -------------------------------------------- */}
          <div className="flex justify-evenly  max-sm:flex-col max-sm:gap-4 py-5 items-center ">
            <div className="transform scale-100 transition-transform  h-max hover:scale-125 rounded-2xl  overflow-auto shadow-md max-sm:hover:scale-110 ">
              <img src={imagen2} alt="" width="450" />
            </div>
            <div className="w-1/3  max-sm:w-11/12">
              <p className="font-semibold  ">Description:</p>
              <p className="">
                The main objective of this project is to design and develop a
                robust system that is capable of taking data from different
                types of sensors, these data are taken in real time, account
                with storage of historical records and the generation of reports
                that facilitate decision making.
              </p>
            </div>
          </div>
          {/* --------------------------------------------- */}
          <div className=" max-sm:flex-col max-sm:gap-4 flex justify-evenly py-5 items-center">
            <div className="max-sm:hover:scale-110 transform scale-100 transition-transform  h-max hover:scale-125 rounded-2xl  overflow-auto shadow-md">
              <img src={controllPageImagen} alt="" width="450" />
            </div>
            <div className="w-1/3 max-sm:w-11/12">
              <p className="font-semibold">Description:</p>
              <p className="">
              The objective of this project was to create a webpage that serves as an online catalog for a company. The page includes a login section for administrators and customers. Customers have the ability to modify the catalog's content from a control panel. Additionally, they are provided with the option to upload an Excel file, which simplifies data migration to the page and allows it to be used as a foundation for the catalog.
              </p>
            </div>
          </div>

          <div className="flex justify-evenly py-5  max-sm:flex-col max-sm:gap-4 items-center">
            <div className="transform scale-100 transition-transform h-max hover:scale-125 rounded-2xl  overflow-auto shadow-md max-sm:hover:scale-110">
              <img src={imagen} alt="" width="450" />
            </div>

            <div className="w-1/3 max-sm:w-11/12">
              <p className="font-semibold">Description:</p>
              <p className="Warp">
                The main objective of this project is to design and develop a
                chat for the communication of two entities through a user
                verification system 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CompExperiencia;
