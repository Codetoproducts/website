import info from "../assets/info.json";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  return (
    <div className="text-white w-full text-left">
      <h2 className="text-white text-2xl mb-8">Experience</h2>
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
        {info.experience.map((item, index) => (
          <ExperienceCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
