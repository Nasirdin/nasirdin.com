import React, { useState } from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import {
  downAnimation,
  downBtnAnimation,
  leftAnimation,
} from "../../Animations";
import Title from "../Title";
import { skills, tab } from "../../constants";

// ---- Components ---- //

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="skills">
      <div className="container">
        <Title title={"Skills"} />
        <div className="skills__content">
          <motion.div
            className="skills__picture"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={leftAnimation}
          ></motion.div>
          <ul className="skills__tab">
            {tab.map((item, indx) => (
              <motion.li
                className={`skills__btn ${
                  item.keyWord === activeTab ? "activeBtn" : ""
                }`}
                onClick={() => {
                  setActiveTab(item.keyWord);
                }}
                initial="hidden"
                whileInView="visible"
                custom={indx}
                variants={downBtnAnimation}
                key={indx}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
          <ul className="skills__items">
            {skills
              .filter((item) => item.keyWord === activeTab)
              .map((item, indx) => (
                <motion.li
                  className="skills__item"
                  initial="hidden"
                  whileInView="visible"
                  custom={indx}
                  variants={downAnimation}
                  key={item.id}
                >
                  <p className="skills__text">{item.name}</p>
                  <div className="skills__line">
                    <div
                      className="skills__activeLine"
                      style={{ width: `${item.done}%` }}
                    ></div>
                  </div>
                </motion.li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
