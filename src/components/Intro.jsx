import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Intro = () => {
  return (
    <div className="flex-1 px-8 py-12">
      <span className="text-white text-xl mb-5 block">
        Software Development Team
      </span>
      <h1 className="text-white text-3xl">
        Transform Your Business with
        <br />
        <span className="text-emerald-500 text-3xl">
          Expert Software Solutions
        </span>
      </h1>
      <p className="text-white mt-8">
        At CodeToProducts, we excel in crafting high-performing software teams
        and R&D centers that align perfectly with your business goals. Our
        talented professionals are dedicated to developing innovative
        applications, dynamic websites, and seamless automation processes. Ready
        to take on any challenge, we are committed to driving your success and
        bringing your ideas to life with precision and expertise.
      </p>
      <div className="mt-8 flex flex-row gap-5">
        <a href="https://github.com/Codetoproducts">
          <button className="border-emerald-500 border-2 text-emerald-500 flex justify-center items-center rounded-full aspect-square h-14">
            <FontAwesomeIcon
              className="text-emerald-500"
              icon={faGithub}
              size="xl"
            />
          </button>
        </a>
        {/* <button className="border-emerald-500 border-2 text-emerald-500 flex justify-center items-center rounded-full aspect-square h-14">
          <FontAwesomeIcon
            className="text-emerald-500"
            icon={faTwitter}
            size="xl"
          />
        </button>
        <button className="border-emerald-500 border-2 text-emerald-500 flex justify-center items-center rounded-full aspect-square h-14">
          <FontAwesomeIcon
            className="text-emerald-500"
            icon={faLinkedin}
            size="xl"
          />
        </button> */}
        <a href="http://www.instagram.com/codetoproducts">
          <button className="border-emerald-500 border-2 text-emerald-500 flex justify-center items-center rounded-full aspect-square h-14">
            <FontAwesomeIcon
              className="text-emerald-500"
              icon={faInstagram}
              size="xl"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
