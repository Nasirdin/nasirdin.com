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

// ---- Components ---- //

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tab = [
    {
      id: 1,
      name: "Front-End",
      keyWord: "frontend",
    },
    {
      id: 1,
      name: "Back-End",
      keyWord: "backend",
    },
    {
      id: 1,
      name: "Web3",
      keyWord: "web3",
    },
    {
      id: 1,
      name: "Other",
      keyWord: "other",
    },
  ];

  const skills = [
    {
      id: 1,
      name: "HTML",
      keyWord: "frontend",
      done: 90,
    },
    {
      id: 2,
      name: "css",
      keyWord: "frontend",
      done: 40,
    },
    {
      id: 3,
      name: "js",
      keyWord: "frontend",
      done: 60,
    },
    {
      id: 4,
      name: "nodejs",
      keyWord: "backend",
      done: 90,
    },
    {
      id: 5,
      name: "express",
      keyWord: "backend",
      done: 90,
    },
    {
      id: 6,
      name: "mongo",
      keyWord: "backend",
      done: 90,
    },
    {
      id: 7,
      name: "solidity",
      keyWord: "web3",
      done: 90,
    },
    {
      id: 8,
      name: "Web3.js",
      keyWord: "web3",
      done: 90,
    },
    {
      id: 9,
      name: "ethers.js",
      keyWord: "web3",
      done: 90,
    },
    {
      id: 10,
      name: "C#",
      keyWord: "other",
      done: 90,
    },
    {
      id: 11,
      name: "Pyhton",
      keyWord: "other",
      done: 90,
    },
    {
      id: 12,
      name: "PhotoShop",
      keyWord: "other",
      done: 90,
    },
  ];

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
