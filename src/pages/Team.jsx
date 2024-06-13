import MemberImage from "../components/MemberImage";
import Header from "../components/Header";
import ali from "../assets/images/ali.png";
import mohammad from "../assets/images/mohammad.png";
import behnam from "../assets/images/behnam.png";
import mostafa from "../assets/images/mostafa.png";
import nima from "../assets/images/nima.png";
import TeamNav from "../components/TeamNav";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import StairTransition from "../components/StairTransition";
import { useState } from "react";
const Team = () => {
  const [view, setView] = useState("skills");
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-row flex-wrap gap-8 justify-center max-w-3xl mx-auto">
        <MemberImage
          source={ali}
          alt={"Ali"}
          url={"https://www.linkedin.com/in/alikamalimh/"}
        />
        <MemberImage
          source={nima}
          alt={"Nima"}
          url={"https://www.linkedin.com/in/nima-a-765667221/"}
        />
        <MemberImage
          source={behnam}
          alt={"Behnam"}
          url={"https://www.linkedin.com/in/behnamarbab/"}
        />
        <MemberImage
          source={mostafa}
          alt={"Mostafa"}
          url={"https://www.linkedin.com/in/mostafa-tehrani/"}
        />
        <MemberImage source={mohammad} alt={"Mohammad"} />
      </div>
      <div className="mt-20 p-8 flex flex-col gap-3 xl:grid-cols-3 xl:grid xl:gap-10">
        <div className="col-span-1">
          <TeamNav current={view} setCurrent={setView} />
        </div>
        <div className="col-span-2">
          {view === "skills" && <Skills />}
          {view === "experience" && <Experience />}
        </div>
      </div>
      <StairTransition />
    </div>
  );
};

export default Team;
