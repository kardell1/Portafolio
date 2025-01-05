type PTitle = {
  title: string;
  id: string;
};
const Underlined = ({ title, id }: PTitle) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-max group cursor-pointer " onClick={() => handleScroll(id)}>
      <p> {title} </p>
      <span className=" absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-full group-hover:transition-[width] ease-in-out duration-300 bg-gradient-to-l from-emerald-400 to-slate-500/5"></span>
    </div>
  );
};

export default Underlined;
