import Underlined from "../../components/Underlined";

const NavBar = () => {
  const Nav = [
    { title: "Acerca de mí", id: "aboutMe" },
    { title: "Experiencia", id: "experience" },
    { title: "Proyectos", id: "projects" },
    { title: "Tecnologías", id: "technologies" },
  ];

  return (
    <div className="flex flex-col gap-2 py-8 font-medium">
      {Nav.map((title, index) => (
        <Underlined key={index} title={title.title} id={title.id} />
      ))}
    </div>
  );
};

export default NavBar;
