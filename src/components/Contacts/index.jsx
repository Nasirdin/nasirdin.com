import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import Title from "../Title";
import { upAnimation } from "../../Animations";
import { contatcsArr } from "../../constants";
// ---- Components ---- //

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <Title title={"Contacts"} />
        <motion.p
          className="contacts__text subtitle"
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          variants={upAnimation}
        >
          Message me if you have some questions, suggestions or just want to ask
          how I'm doing.
        </motion.p>

        <ul className="contacts__items">
          {contatcsArr.map((item, indx) => (
            <motion.li
              className="contacts__item"
              initial="hidden"
              whileInView="visible"
              custom={indx}
              key={indx}
              variants={upAnimation}
            >
              <div className="contacts__img">
                <img src={item.icon} alt="icon" />
              </div>
              <a className="contacts__link" href="/#">
                {item.text}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
