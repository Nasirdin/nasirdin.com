import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import { downAnimation, leftAnimation, rightAnimation } from "../../animations";

// ---- Components ---- //

const Home = () => {
  return (
    <motion.div className="home" initial="hidden" whileInView="visible">
      <div className="container">
        <motion.div
          custom={1}
          className="home__picture"
          variants={leftAnimation}
        ></motion.div>
        <div className="home__content">
          <motion.h1
            custom={2}
            className="home__title"
            variants={rightAnimation}
          >
            Nasirdin Zhaparkulov
          </motion.h1>
          <motion.h2
            className="home__subtitle"
            custom={3}
            variants={rightAnimation}
          >
            Front-End Developer
          </motion.h2>
          <motion.a
            className="home__btn"
            custom={3}
            variants={downAnimation}
            href="/#"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
