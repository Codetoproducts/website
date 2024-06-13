const SkillCard = ({ icon, title }) => {
  return (
    <div
      className="h-24 w-24 rounded-md flex flex-col items-center justify-center bg-slate-800 gap-1"
      title={title}
    >
      <img src={icon} alt="title" className="text-emerald-500 h-12 w-12" />
      <span className="text-sm text-emerald-500 xl:hidden">{title}</span>
    </div>
  );
};

export default SkillCard;
