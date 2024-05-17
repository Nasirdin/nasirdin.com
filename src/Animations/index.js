const baseAnimation = {
  hidden: { opacity: 0 },
  visible: (custom, rotateValue = 0, xValue = 0, yValue = 0) => ({
    opacity: 1,
    rotate: rotateValue,
    x: xValue,
    y: yValue,
    transition: { delay: custom * 0.2 },
  }),
};

export const downAnimation = {
  ...baseAnimation,
  hidden: { ...baseAnimation.hidden, y: -50 },
  visible: (custom) => baseAnimation.visible(custom),
};

export const downBtnAnimation = {
  ...baseAnimation,
  hidden: { ...baseAnimation.hidden, y: -30, rotate: -30 },
  visible: (custom) => baseAnimation.visible(custom, 0, 0, 0),
};

export const leftAnimation = {
  ...baseAnimation,
  hidden: { ...baseAnimation.hidden, x: -30 },
  visible: (custom) => baseAnimation.visible(custom, 0, 0, 0),
};

export const rightAnimation = {
  ...baseAnimation,
  hidden: { ...baseAnimation.hidden, x: 30 },
  visible: (custom) => baseAnimation.visible(custom, 0, 0, 0),
};
export const upAnimation = {
  ...baseAnimation,
  hidden: { ...baseAnimation.hidden, y: 50 },
  visible: (custom) => baseAnimation.visible(custom),
};


export const rightAnimationForMobile = {
  ...baseAnimation,
  hidden: { ...baseAnimation.hidden, x: 60 },
  visible: (custom) => baseAnimation.visible(custom, 0, 0, 0),
};