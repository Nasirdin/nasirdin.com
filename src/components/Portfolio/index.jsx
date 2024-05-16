import React, { useState } from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import PortfolioCard from "../PortfolioCard";
import { rightAnimation, rightAnimationForMobile } from "../../Animations";
import Title from "../Title";

// ---- Components ---- //

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const portfolioTab = [
    {
      id: 1,
      name: "All",
      keyWord: "all",
    },
    {
      id: 2,
      name: "Full-Stack",
      keyWord: "fullstack",
    },
    {
      id: 3,
      name: "Front-End",
      keyWord: "frontend",
    },
    {
      id: 4,
      name: "Back-End",
      keyWord: "backend",
    },
    {
      id: 5,
      name: "Web3",
      keyWord: "web3",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "frontend",
    },
    {
      id: 2,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "backend",
    },
    {
      id: 3,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "web3",
    },
    {
      id: 1,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "frontend",
    },
    {
      id: 2,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "backend",
    },
    {
      id: 3,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "web3",
    },
    {
      id: 1,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "frontend",
    },
    {
      id: 2,
      name: "GrandBazar",
      tag: ["Front-End"],
      link: "/grandbazar",
      keyWord: "backend",
    },
  ];
  return (
    <div className="portfolio">
      <div className="container">
        <Title title={"Portfolio"} />

        <ul className="portfolio__tab">
          {portfolioTab.map((item, indx) => (
            <motion.li
              className={`portfolio__tabBtn ${
                item.keyWord === activeTab ? "activeBtn" : ""
              }`}
              onClick={() => {
                setActiveTab(item.keyWord);
              }}
              initial="hidden"
              whileInView="visible"
              custom={indx}
              variants={rightAnimationForMobile}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
        <ul className="portfolio__cards">
          {projects.map((item, indx) => (
            <PortfolioCard item={item} indx={indx} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
