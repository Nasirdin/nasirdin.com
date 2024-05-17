import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import PortfolioCard from "../PortfolioCard";
import { rightAnimationForMobile } from "../../Animations";
import Title from "../Title";
import { portfolioTab, projects } from "../../constants";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

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
              key={item.keyWord}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
        <ul className="portfolio__cards">
          {[...projects].reverse().map((item, indx) => (
            <PortfolioCard item={item} indx={indx} key={indx} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
