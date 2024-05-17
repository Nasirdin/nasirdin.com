import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import TagIcon from "../../assets/icons/tag.svg";
import { upAnimation } from "../../Animations";

// ---- Components ---- //

const PortfolioCard = ({ item, indx }) => {
  const { name, tag, link, keyWord, img } = item;
  return (
    <motion.li
      className="portfolioCard"
      initial="hidden"
      whileInView="visible"
      custom={indx / 2}
      variants={upAnimation}
      key={indx}
    >
      <div className="portfolioCard__img">
        <img src={img} alt={keyWord} />
      </div>
      <div className="portfolioCard__content">
        <h3 className="portfolioCard__title">{name}</h3>
        <ul className="portfolioCard__tags">
          {tag.map((itag, key) => (
            <li className="tag" key={key}>
              <img src={TagIcon} alt="tag-icon" />
              {itag}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default PortfolioCard;
