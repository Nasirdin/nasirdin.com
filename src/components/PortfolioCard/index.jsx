import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import TagIcon from "../../assets/icons/tag.svg";
import { upAnimation } from "../../Animations";

// ---- Components ---- //

const PortfolioCard = ({ item, indx }) => {
  return (
    <motion.li
      className="portfolioCard"
      initial="hidden"
      whileInView="visible"
      custom={indx}
      variants={upAnimation}
    >
      <div className="portfolioCard__img"></div>
      <div className="portfolioCard__content">
        <h3 className="portfolioCard__title">{item.name}</h3>
        <ul className="portfolioCard__tags">
          {item.tag.map((tag) => (
            <li className="tag">
              <img src={TagIcon} alt="tag-icon" />
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default PortfolioCard;
