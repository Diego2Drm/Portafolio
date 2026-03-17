import { motion, useInView } from "framer-motion"
import { languages } from "../imgs/imgsLanguages";
import { useEffect, useRef, useState } from "react";


function Languages() {
  const [order, setOrder] = useState(languages);
  const containerRef = useRef(null);
  const isInview = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (!isInview) return;
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
    return () => clearTimeout(timeout);
  }, [order, isInview])


  return (
    <div style={container} ref={containerRef}>
      {
        order.map((lan) => (
          <motion.img
            layout
            transition={spring}
            key={lan}
            src={lan}
            style={{ ...item, lan }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
        ))
      }
    </div>
  )
};

export { Languages };

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5)
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
}

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}

const item = {
  width: 100,
  height: 100,
  borderRadius: "10px",
}