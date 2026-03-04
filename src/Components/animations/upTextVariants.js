export const uptextVariants = () => {
  return {
    hiddenText: {
      y: 200,
      opacity: 0,
    },
    showText: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, delay: 1.2 },
    },
  };
};