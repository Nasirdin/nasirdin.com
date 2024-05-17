import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import { projects } from "../../constants";
import { FaLink } from "react-icons/fa6";
import { GrTag } from "react-icons/gr";

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
          <div className="portfolioOverlay__img">
            <img
              src={getActiveProject[0].img}
              alt={getActiveProject[0].keyWord}
            />
          </div>
          {/* <a
            className="portfolioOverlay__title sectionTitle"
            href="/#"
            target="_blank"
          >
            <FaLink className="portfolioOverlay__icon" />
            {getActiveProject[0].name}
          </a>
          <ul className="portflolioOverlay__tags">
            {getActiveProject[0].tag.map((tag) => (
              <li className="tag">
                <GrTag />
                {tag}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverlay;
