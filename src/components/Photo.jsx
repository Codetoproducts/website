import { motion } from "framer-motion";
import photo from "../assets/photo.png";
const Photo = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
      >
        <img
          className="w-full h-full object-contain relative top-0 left-0  rounded-full mix-blend-lighten"
          src={photo}
          alt="photo"
        />
        <motion.svg
          className={
            "w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute top-0 left-0 z-40"
          }
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke={"#00ff99"}
            strokeWidth={4}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
