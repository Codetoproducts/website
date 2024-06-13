import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ label, icon, value }) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="bg-slate-800 h-16 w-16 rounded-md flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="text-emerald-500" size="xl" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm text-gray-400 block">{label}</span>
        <span className="text-white block">{value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
