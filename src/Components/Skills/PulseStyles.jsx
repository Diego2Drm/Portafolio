import { motion, useInView } from "framer-motion"
import { imgsStyles } from "../imgs/imgsSyles";
import { useRef } from "react";

function PulseStyles() {
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.5 })

  const dotVariants = {
    pulse: {
      scale: [.5, 1, .5],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={isInview ? "pulse" : ""}
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="dot" variants={dotVariants} >
        <img src={imgsStyles.bootstrap5} alt="Logo-Bootstrap-5" />
      </motion.div>
      <motion.div className="dot" variants={dotVariants} >
        <img src={imgsStyles.sass} alt="Logo-Sass" />
      </motion.div>
      <motion.div className="dot" variants={dotVariants} >
        <img src={imgsStyles.styledComponents} alt="Logo-Styled-Components" className="bg-white" />
      </motion.div>
      <motion.div className="dot" variants={dotVariants} >
        <img src={imgsStyles.tailwindcss} alt="Logo-TailwindCss" />
      </motion.div>
      <StyleSheet />
    </motion.div>
  )
}

function StyleSheet() {
  return (
    <style>
      {`
            .container {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 20px;
            }

            .dot {
                width: 100px;
                height: 100px;
                will-change: transform;
            }
            `}
    </style>
  )
}

export { PulseStyles };