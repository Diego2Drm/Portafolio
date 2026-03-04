export const textShowVariants = (delay) => {
  return {
    hiddenText: {
      x: -200,
      opacity: 0
    },
    showText: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, delay: delay }
    }
  }
}