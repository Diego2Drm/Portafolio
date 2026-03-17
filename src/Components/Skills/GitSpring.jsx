import React from 'react'
import { motion } from "framer-motion";
import gitImg from '../../assets/skills-images/git.png'

function GitSpring() {
  return (

    <motion.img
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
      src={gitImg} alt="Logo-Git"
      className='md:w-32'
    />
  )
}

export { GitSpring };
