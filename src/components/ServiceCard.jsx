import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ number, title, url, description }) => {
  return (
    <div className="w-full border-b pb-3 border-white">
      <div className="flex flex-row justify-between items-center">
        <span className="fancy-font-family text-white text-4xl block">
          {"0" + number}
        </span>
        <a href={url}>
          <button className="h-14 w-14 rounded-full bg-white p-5 flex justify-center items-center rotate-45 hover:rotate-0 duration-100 hover:bg-emerald-500">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </button>
        </a>
      </div>
      <h3 className="text-3xl text-white font-bold">{title}</h3>
      <p className="text-white mt-8">{description}</p>
    </div>
  );
};
export default ServiceCard;
