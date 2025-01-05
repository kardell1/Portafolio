import Aside from "./components/Aside";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 max-md:grid-cols-1 bg-[#0f172a] text-slate-100 cursor-default   " >
      <Aside />
      <Main />
    </div>
  );
};

export default App;
