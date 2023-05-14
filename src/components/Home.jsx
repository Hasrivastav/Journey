import React from "react";
import { motion } from "framer-motion";
import Social from "./Social";
import Data from "./Data";
import Arrow from "./Arrow";

const Home = () => {
  const homeContentVariants = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const homeContentBounceVariants = {
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="home section ripple-background">
      <div className="circle small shade5"></div>
      <div className="circle medium shade4"></div>
      <div className="circle large shade3"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle xxlarge shade1"></div>
      <div className="home__container container parent_flex">
        <motion.div
          className="home__content flex"
          variants={homeContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="combine"
            variants={homeContentBounceVariants}
            animate="visible"
          >
            <Data />
            <Social />
          </motion.div>

          <Arrow />
        </motion.div>
        <div className="home__img"></div>
      </div>
    </section>
  );
};

export default Home;
