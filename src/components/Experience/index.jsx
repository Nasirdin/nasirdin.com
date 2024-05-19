import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import { downAnimation, upAnimation } from "../../Animations";
import Title from "../Title";
import { jobs } from "../../constants";

// ---- Components ---- //

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <Title title={"Experience"} />
        <motion.p
          className="contacts__text subtitle"
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          variants={upAnimation}
        >
          During my career in Front-End development, I have accumulated almost
          three years of experience.
        </motion.p>
        <ul className="experience__items">
          {jobs.reverse().map((item, indx) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              custom={indx}
              variants={downAnimation}
              className="experience__item"
              key={item.id}
            >
              <div className="experience__period">
                <p className="experience__text">
                  {item.start} - <span>{item.finish}</span>
                </p>
              </div>
              <span className="experience__line"></span>
              <div className="experience__job">
                <h3 className="experience__title">{item.companyName}</h3>
                <p className="experience__subtitle">
                  {item.jobTitle} / {item.city}
                </p>
                <p className="experience__text">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
