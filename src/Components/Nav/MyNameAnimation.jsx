import React from "react";
import { motion } from "framer-motion";

function MyNameAnimation({ myName, styles }) {
  return (
    <div className="text-center">
      {
        myName.split("").map((letter, i) => (
          <motion.span key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1
            }}
            className={`text-white bg-lightWhite p-1 ${styles}`}
          >
            {letter}
          </motion.span>
        ))
      }
    </div>
  )

}

export { MyNameAnimation };