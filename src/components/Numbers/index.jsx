import React, { useEffect, useRef } from "react";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { numbers } from "../../constants";

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
