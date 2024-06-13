const TeamNav = ({ current, setCurrent }) => {
  return (
    <div>
      <h1 className="text-white text-3xl">Why Hire Us?</h1>
      <p className="text-white my-5">hire us because we need money</p>
      <button
        onClick={() => setCurrent("skills")}
        className={`w-full p-2 mb-5 rounded-md ${
          current === "skills"
            ? "bg-emerald-500  text-slate-900 hover:bg-emerald-400"
            : "bg-slate-800  text-white hover:bg-slate-700"
        }`}
      >
        {" "}
        Skills
      </button>
      <button
        onClick={() => setCurrent("experience")}
        className={`w-full p-2 mb-5 rounded-md ${
          current === "experience"
            ? "bg-emerald-500  text-slate-900 hover:bg-emerald-400"
            : "bg-slate-800  text-white hover:bg-slate-700"
        }`}
      >
        Experience
      </button>
    </div>
  );
};

export default TeamNav;
