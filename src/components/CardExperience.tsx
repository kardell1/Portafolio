type CardProp = {
  date: string;
  title: string;
  enterprice: string;
  description: string;
  tecnologies: string[];
};
const CardExperience = ({
  date,
  title,
  enterprice,
  description,
  tecnologies,
}: CardProp) => {
  return (
    <div className="grid grid-cols-3 py-3 group hover:bg-slate-700/10 rounded-lg transition-[background] max-md:grid-cols-1 max-md:px-3 ">
      <div className="px-5 text-base min-w-max col-span-1  max-md:px-0 max-md:py-2"> {date} </div>
      <div className="col-span-2 ">
        <p className="text-slate-200 font-medium group-hover:text-green-500 "> {title} </p>
        <p className="text-slate-200 font-medium py-2 group-hover:text-green-500"> {enterprice} </p>
        <p className="max-w-full" > {description} </p>
        <div>
          <p className="text-slate-200 py-2 group-hover:text-green-500">Tecnologies :</p>
          <div className="flex gap-2 flex-wrap">
            {tecnologies.map((tecnologi, index) => (
              <p
                key={index}
                className="px-3 py-1 rounded-full text-green-400 bg-slate-500/10 "
              >
                {" "}
                {tecnologi}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
