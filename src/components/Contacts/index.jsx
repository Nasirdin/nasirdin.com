import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import Email from "../../assets/icons/email.svg";
import Phone from "../../assets/icons/phone.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Title from "../Title";
import { upAnimation } from "../../Animations";
// ---- Components ---- //

const Contacts = () => {
  const contatcsArr = [
    {
      id: 1,
      link: "/#",
      text: "zhaparkulov02@gmail.com",
      icon: Email,
    },
    {
      id: 1,
      link: "/#",
      text: "+996 (703) 31-32-74",
      icon: Phone,
    },
    {
      id: 1,
      link: "/#",
      text: "@NasirdinDev",
      icon: Telegram,
    },
    {
      id: 1,
      link: "/#",
      text: "Nasirdin Zhaparkulov",
      icon: Linkedin,
    },
  ];
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
