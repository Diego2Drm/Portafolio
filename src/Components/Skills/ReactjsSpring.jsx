import React from 'react'
import { motion } from "framer-motion"
import LogoReactJS from "../../assets/skills-images/react.png"

function ReactjsSpring() {
  return (

    <motion.img
      src={LogoReactJS}
      alt="Logo-React-JS"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        stiffness: 100,
        damping: 10,
        mass: 1,
        type: "spring",
        duration: 2,
        repeatDelay: 0.2
      }}
      whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}
      className=''
    />

  )
}

export { ReactjsSpring };
