import InfoCard from "./InfoCard";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import info from "../assets/info.json";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10 justify-center">
      <InfoCard label={"phone"} value={info.contact.phone} icon={faPhone} />
      <InfoCard label={"email"} value={info.contact.email} icon={faEnvelope} />
      <InfoCard
        label={"address"}
        value={info.contact.address}
        icon={faLocationDot}
      />
    </div>
  );
};

export default ContactInfo;
