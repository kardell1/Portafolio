import { BsDiscord, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import MensajeContac from "./MsjContacto";
function CompContacto() {
  return (
    <>
      <footer className="w-auto">
        <div className=" h-max max-sm:grid-cols-1 ml-5 grid grid-cols-2 items-center py-6  text-emerald-500 gap-2">
          <div className="px-10 flex flex-col gap-4 text-orange-500">
            <div className="flex items-center gap-2">
              <h3 className="text-emerald-500 text-2xl font-semibold">Find me</h3>
            </div>
            <div className="flex hover:text-emerald-500 transition duration-500 ease-in-out items-center gap-2">
              <BsLinkedin className="text-2xl  " />
              <a
                href="https://www.linkedin.com/in/KSilvaR1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>LinkendIn: KSilvaR1</p>
              </a>
            </div>
            <div className="hover:text-emerald-500 transition duration-500 ease-in-out flex items-center gap-2">
            
              <IoLogoWhatsapp className="text-2xl" />
              <a
                href="https://api.whatsapp.com/send?phone=59176285065"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>CellPhone : ### ### ## ###</p>
              </a>
            </div>
            <div className="hover:text-emerald-500 transition duration-500 ease-in-out flex items-center gap-2">
              <BsDiscord className="text-2xl" />
              <a
                href="https://discordapp.com/users/513783255951081483"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Discord: kardell#6942</p>
              </a>
            </div>
          </div>
          <div className="px-10">
            <MensajeContac />
          </div>
        </div>
        <p className="font-extralight text-xs text-emerald-300 p-2">
          @2023-ALL RIGHTS RESERVED by KARDELL{" "}
        </p>
      </footer>
    </>
  );
}
export default CompContacto;
