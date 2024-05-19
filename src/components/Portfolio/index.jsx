import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import PortfolioCard from "../PortfolioCard";
import { rightAnimationForMobile, upAnimation } from "../../Animations";
import Title from "../Title";
import { portfolioTab, projects } from "../../constants";
import PortfolioOverlay from "../PortfolioOverlay";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openCardId, setOpenCardId] = useState(null);

  useEffect(() => {
    if (openCardId !== null) {
      document.body.style.overflow = "hidden";
    } else if (openCardId === null) {
      document.body.style.overflow = "";
    }
  }, [openCardId]);

  return (
    <div className="portfolio">
      <div className="container">
        <Title title={"Portfolio"} />
        <motion.p
          className="contacts__text subtitle"
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          variants={upAnimation}
        >
          Explore my diverse portfolio showcasing innovative projects across
          various domains.
        </motion.p>
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
              key={indx}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
        <ul className="portfolio__cards">
          {[...projects]
            .filter((item) => {
              // Если активный таб - "all", показываем все проекты
              if (activeTab === "all") return true;
              // Иначе фильтруем проекты по ключевому слову
              return item.keyWord.includes(activeTab);
            })
            .map((item, indx) => (
              <PortfolioCard
                setOpenCardId={setOpenCardId}
                item={item}
                indx={indx}
                key={indx}
              />
            ))}
        </ul>
        {openCardId && (
          <PortfolioOverlay
            openCardId={openCardId}
            setOpenCardId={setOpenCardId}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
