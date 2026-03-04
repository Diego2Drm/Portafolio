export const downImgsVariants = () => {
  return {
    hiddenImg: {
      y: -200,
      opacity: 0,
    },
    showImg: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, delay: 1.2 },
    },
  };
};