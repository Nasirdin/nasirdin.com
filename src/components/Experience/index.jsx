import React from "react";
import { motion } from "framer-motion";
// ---- Style ---- //
import "./index.scss";
import { downAnimation } from "../../Animations";
import Title from "../Title";

// ---- Components ---- //

const Experience = () => {
  const jobs = [
    {
      id: 1,
      start: "09.2020",
      finish: "12.2021",
      companyName: "Swap.Online",
      city: "Russia, Moskow",
      jobTitle: "Front-End and Blockchain Developer",
      text: "Lorem loerm loerm lorem lorem lorem",
    },
    {
      id: 2,
      start: "11.2022",
      finish: "03.2023",
      companyName: "Kyrgyz Economic University",
      city: "Kyrgyzstan, Bishkek",
      jobTitle: "Front-End Mentor",
      text: "Lorem loerm loerm lorem lorem lorem",
    },
    {
      id: 3,
      start: "01.2023",
      finish: "05.2023",
      companyName: "Motion Web",
      city: "Kyrgyzstan, Bishkek",
      jobTitle: "Front-End Mentor",
      text: "Lorem loerm loerm lorem lorem lorem",
    },
    {
      id: 4,
      start: "01.2022",
      finish: "05.2023",
      companyName: "GrandBazar",
      city: "UAE, Dubai",
      jobTitle: "Front-End Developer",
      text: "Lorem loerm loerm lorem lorem lorem",
    },
    {
      id: 5,
      start: "10.2023",
      finish: "01.2024",
      companyName: "FitLife",
      city: "USA, Chicago, Illinois",
      jobTitle: "Front-End Developer",
      text: "Lorem loerm loerm lorem lorem lorem",
    },
  ];
  return (
    <div className="experience">
      <div className="container">
        <Title title={"Experience"} />

        <ul className="experience__items">
          {jobs.reverse().map((item, indx) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              custom={indx}
              variants={downAnimation}
              className="experience__item"
            >
              <div className="experience__period">
                <p className="experience__text">
                  {item.start} - <span>{item.finish}</span>
                </p>
              </div>
              <span className="experience__line"></span>
              <div className="experience__job">
                <h3 className="experience__title">{item.companyName}</h3>
                <p className="experience__subtitle">
                  {item.jobTitle} / {item.city}
                </p>
                <p className="experience__text">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
