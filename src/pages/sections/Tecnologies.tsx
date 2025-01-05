import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAstro,
  SiEclipsemosquitto,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Tecnologies = () => {
  const tecnologies = [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-500 text-5xl" />,
    },
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
    },
    {
      title: "React",
      icon: <FaReact className="text-blue-400 text-5xl" />,
    },
    {
      title: "Laravel",
      icon: <FaLaravel className="text-red-500 text-5xl" />,
    },
    {
      title: "PHP",
      icon: <FaPhp className="text-indigo-500 text-5xl" />,
    },
    {
      title: "Java",
      icon: <FaJava className="text-orange-400 text-5xl" />,
    },
    {
      title: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-green-700 text-5xl" />,
    },
    {
      title: "Astro",
      icon: <SiAstro className="text-purple-500 text-5xl" />,
    },
    {
      title: "MySQL",
      icon: <SiMysql className="text-blue-500 text-5xl" />,
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700 text-5xl" />,
    },
    {
      title: "Mosquitto",
      icon: <SiEclipsemosquitto className="text-gray-500 text-5xl" />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-5xl" />,
    },
  ];
  return (
    <div id="technologies" >
      <p className="text-slate-200 font-medium py-4">Tecnologias :</p>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3">
        {tecnologies.map((tecnologi, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <span>{tecnologi.icon}</span>
            <p> {tecnologi.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologies;
