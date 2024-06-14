const ExperienceCard = ({ title, description }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-5 w-full">
      <h2 className="text-white text-2xl mb-3">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default ExperienceCard;
