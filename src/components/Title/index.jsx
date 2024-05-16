import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import { downAnimation } from "../../animations";

// ---- Components ---- //

const Title = ({ title }) => {
  return (
    <h2 className="sectionTitle">
      {title.split("").map((letter, indx) => (
        <motion.span
          initial="hidden"
          whileInView="visible"
          custom={indx / 4}
          variants={downAnimation}
          key={indx}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
};

export default Title;
