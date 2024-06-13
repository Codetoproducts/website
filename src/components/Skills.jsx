import SkillCard from "./SkillCard";

import cssIcon from "../assets/icons/css.png";
import djangoIcon from "../assets/icons/django.png";
import firebaseIcon from "../assets/icons/firebase.png";
import flaskIcon from "../assets/icons/flask.png";
import htmlIcon from "../assets/icons/html.png";
import linuxIcon from "../assets/icons/linux.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import mysqlIcon from "../assets/icons/mysql.png";
import nodeIcon from "../assets/icons/node.png";
import reactIcon from "../assets/icons/react.png";
import typescriptIcon from "../assets/icons/typescript.png";
import pythonIcon from "../assets/icons/python.png";
import javascriptIcon from "../assets/icons/javascript.png";
import wordpressIcon from "../assets/icons/wordpress.png";

const Skills = () => {
  return (
    <div className="text-white w-full text-left">
      <h2 className="text-white text-2xl">Skills</h2>
      <p className="text-white my-5">Some description for skills</p>
      <div className="flex flex-row flex-wrap gap-8 max-w-3xl mx-auto justify-center xl:justify-start">
        <SkillCard title={"JavaScript"} icon={javascriptIcon} />
        <SkillCard title={"TypeScript"} icon={typescriptIcon} />
        <SkillCard title={"Python"} icon={pythonIcon} />
        <SkillCard title={"Nodejs"} icon={nodeIcon} />
        <SkillCard title={"React"} icon={reactIcon} />
        <SkillCard title={"Mongo DB"} icon={mongodbIcon} />
        <SkillCard title={"MySQL"} icon={mysqlIcon} />
        <SkillCard title={"Firebase"} icon={firebaseIcon} />
        <SkillCard title={"Django"} icon={djangoIcon} />
        <SkillCard title={"Flask"} icon={flaskIcon} />
        <SkillCard title={"Wordpress"} icon={wordpressIcon} />
        <SkillCard title={"HTML"} icon={htmlIcon} />
        <SkillCard title={"CSS"} icon={cssIcon} />
        <SkillCard title={"Linux"} icon={linuxIcon} />
      </div>
    </div>
  );
};

export default Skills;
