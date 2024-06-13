import { motion } from "framer-motion";

const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index;
};

const Stairs = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={StairAnimation}
            initial={{ top: "0%" }}
            animate={{
              top: "100%",
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.1 * reverseIndex(index),
              },
            }}
            style={{
              position: "absolute",
              left: `${index * 20}%`,
              width: "20%",
              height: "100vh",
              backgroundColor: "white",
              top: "0%",
            }}
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
