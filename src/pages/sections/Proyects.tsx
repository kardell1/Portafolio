import CardExperience from "../../components/CardExperience";

const Proyects = () => {
  const data = [
    {
      date: "2026 - Actualidad",
      title: "Sistema de gestión empresarial a medida",
      enterprice: "Empresa de importaciones",
      description:
        "Solución de gestión interna desarrollada para una empresa dedicada a la importación y comercialización de productos relacionados con la marroquinería y el calzado. El sistema centraliza la gestión de productos y operaciones del negocio, contemplando una estructura multi-sucursal y los distintos procesos asociados a la importación y distribución. Actualmente se encuentra en desarrollo y evolución bajo un contrato de licencia de uso.",
      type: ["Software a medida · Contrato"],
    },
    {
      date: "2026 - Actualidad",
      title: "Sistema de gestión para producción",
      enterprice: "Producción y comercialización de alimentos",
      description:
        "Solución de gestión desarrollada para un negocio dedicado a la producción y comercialización de alimentos, con distintas áreas de producción y establecimientos. El sistema está orientado al control de las operaciones, establecimientos e ítems producidos, centralizando la información necesaria para organizar y supervisar los diferentes procesos del negocio. Actualmente se encuentra en desarrollo bajo un contrato de licencia de uso.",
      type: ["Software a medida · Contrato"],
    },
  ];

  return (
    <div id="projects">
      <p className="text-slate-200 font-medium py-4">
        Proyectos y soluciones a medida:{" "}
      </p>
      <div className=" flex flex-col-reverse gap-4">
        {data.map((experience, index) => (
          <a key={index} target="_blank" rel="noopener noreferrer">
            <CardExperience
              date={experience.date}
              description={experience.description}
              enterprice={experience.enterprice}
              tecnologies={experience.type}
              title={experience.title}
              titlePropTecnology="Modalidad"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
