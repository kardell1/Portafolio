import CardExperience from "../../components/CardExperience";
import data from "../../data/experience.json";
const Experience = () => {
  return (
    <div id="experience" >
      <p className="text-slate-200 font-medium py-4">
        Experiencia relevante :{" "}
      </p>
      <div className=" flex flex-col-reverse gap-4">
        {data.map((experience, index) => (
          <CardExperience
            key={index}
            date={experience.date}
            description={experience.description}
            enterprice={experience.enterprice}
            tecnologies={experience.tecnologies}
            title={experience.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
