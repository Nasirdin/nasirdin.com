import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import cv from "../../assets/cv.pdf";
import { downAnimation, leftAnimation, rightAnimation } from "../../Animations";

// ---- Components ---- //

const Home = () => {
  return (
    <motion.div className="home" initial="hidden" whileInView="visible">
      <div className="container">
        <div className="home__block">
          <motion.div
            custom={1}
            className="home__picture"
            variants={leftAnimation}
          >
            <div className="home__animBlock animBlock">
              <div className="animBlock__one">
                <img src="" alt="" />
              </div>
              <div className="animBlock__two"></div>
              <div className="animBlock__three"></div>
            </div>
          </motion.div>
        </div>
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
            href={cv}
            download={"Nasirdin-Zhaparkulov CV"}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
