import CardExperience from "../../components/CardExperience";

const Proyects = () => {
  const data = [
    {
      date: "Gestion 2024",
      title: "Página de Turismo",
      enterprice: "Lago Titicaca",
      description:
        "La Isla del Sol y la Isla de la Luna son dos destinos emblemáticos situados en el Lago Titicaca, en Bolivia, y son parte del patrimonio cultural de la región andina. La Isla del Sol, conocida como la cuna del sol en la mitología andina, es famosa por sus impresionantes paisajes, ruinas preincaicas, y caminos que permiten explorar antiguos templos y estructuras incas.",
      tecnologies: ["Astro.js", "Css"],
      url: "https://landing-page-titicaca.vercel.app/",
    },
  ];
  return (
    <div id="projects">
      <p className="text-slate-200 font-medium py-4">
        Proyectos independientes :{" "}
      </p>
      <div className=" flex flex-col-reverse gap-4">
        {data.map((experience, index) => (
          <a
            key={index}
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardExperience
              date={experience.date}
              description={experience.description}
              enterprice={experience.enterprice}
              tecnologies={experience.tecnologies}
              title={experience.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
