import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import { projects } from "../../constants";
import { GrTag } from "react-icons/gr";
import {
  downAnimation,
  rightAnimationForMobile,
  upAnimation,
} from "../../Animations";

// ---- Components ---- //

const PortfolioOverlay = ({ openCardId, setOpenCardId }) => {
  const getActiveProject = projects.filter((project) => {
    return project.id === openCardId;
  });
  return (
    <div className="portfolioOverlay">
      <div
        className="portfolioOverlay__bg"
        onClick={() => {
          setOpenCardId(null);
        }}
      ></div>
      <div className="portfolioOverlay__content">
        <div className="portfolioOverlay__left">
          <motion.div
            className="portfolioOverlay__img"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={downAnimation}
          >
            <img
              src={getActiveProject[0].img}
              alt={getActiveProject[0].keyWord}
            />
          </motion.div>
        </div>
        <div className="portfolioOverlay__right">
          <motion.h2
            className="portfolioOverlay__title sectionTitle"
            href="/#"
            target="_blank"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={rightAnimationForMobile}
          >
            {getActiveProject[0].name}
          </motion.h2>
          <motion.p
            className="portfolioOverlay__subtitle"
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={rightAnimationForMobile}
          >
            {getActiveProject[0].subtitle}
          </motion.p>
          <motion.p
            className="portfolioOverlay__text"
            initial="hidden"
            whileInView="visible"
            custom={4}
            variants={rightAnimationForMobile}
          >
            {getActiveProject[0].description}
          </motion.p>
          <motion.a
            className="portfolioOverlay__link"
            href={getActiveProject[0].link}
            initial="hidden"
            whileInView="visible"
            custom={5}
            variants={rightAnimationForMobile}
            target="_blank"
          >
            {getActiveProject[0].status}
          </motion.a>
          <ul className="portfolioOverlay__tags">
            {getActiveProject[0].tag.map((tag, indx) => (
              <motion.li
                className="tag"
                initial="hidden"
                whileInView="visible"
                custom={indx + 6}
                variants={upAnimation}
                key={indx}
              >
                <GrTag className="tag__icon" />
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverlay;
