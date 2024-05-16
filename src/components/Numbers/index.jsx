import React, { useEffect, useRef } from "react";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./index.scss";

const Counter = ({ num }) => {
  const [ref, inView] = useInView();
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const previousInView = useRef(false);

  useEffect(() => {
    if (inView && !previousInView.current) {
      animate(count, num, { duration: 1 });
    }
    previousInView.current = inView;
  }, [inView, num, count]);

  return (
    <motion.span ref={ref} className="numbers__span">
      {rounded}
    </motion.span>
  );
};

const Numbers = () => {
  const numbers = [
    { id: 1, number: 20, name: "All" },
    { id: 2, number: 16, name: "Front-End" },
    { id: 3, number: 5, name: "Back-End" },
    { id: 4, number: 3, name: "Web3" },
  ];

  return (
    <div className="numbers">
      <div className="container">
        <ul className="numbers__items">
          {numbers.map((item) => (
            <li key={item.id} className="numbers__item">
              <Counter num={item.number} />
              <p className="numbers__text">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Numbers;
