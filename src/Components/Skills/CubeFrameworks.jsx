import { motion, useAnimationFrame, useInView } from "framer-motion"
import { useRef } from "react"
import { imgsFrameworks } from "../imgs/imgsFrameworks"

function CubeFrameworks() {
  const ref = useRef(null)
  const isInview = useInView(ref, { amount: 0.5 });

  useAnimationFrame((t) => {
    if (!ref.current || !isInview) return;

    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className="container pl-10">
      <motion.div className="cube" ref={ref}
      >

        <div className="side front">
          <img src={imgsFrameworks.angular} alt="Front" className="w-full h-full object-cover" />
        </div>
        <div className="side left" >
          <img src={imgsFrameworks.astro} alt="left" className="w-full h-full object-cover" />
        </div>
        <div className="side right" >
          <img src={imgsFrameworks.astro} alt="right" className="w-full h-full object-cover" />
        </div>
        <div className="side top" >
          <img src={imgsFrameworks.nextJS} alt="top" className="w-full h-full object-cover" />
        </div>
        <div className="side bottom" >
          <img src={imgsFrameworks.nextJS} alt="bottom" className="w-full h-full object-cover" />
        </div>
        <div className="side back" >
          <img src={imgsFrameworks.angular} alt="Frobacknt" className="w-full h-full object-cover" />
        </div>
      </motion.div>
      <StyleSheet />
    </div>
  )
}

export { CubeFrameworks };

function StyleSheet() {
  return (
    <style>{`

.container {
perspective: 800px;
width: 100px;
height: 200px;
display: flex;
align-items: center;
}

.cube {
width: 100px;
height: 100px;
position: relative;
transform-style: preserve-3d;
}

.side {
position: absolute;
width: 100%;
height: 100%;
opacity: 0.8;
}

.front {
transform: rotateY(0deg) translateZ(50px);
background-color: red;
}
.right {
transform: rotateY(90deg) translateZ(50px);
background-color: black;
}
.back {
transform: rotateY(180deg) translateZ(50px);
background-color: red;
}
.left {
transform: rotateY(-90deg) translateZ(50px);
background-color: black;
}
.top {
transform: rotateX(90deg) translateZ(50px);
background-color: white;
}
.bottom {
transform: rotateX(-90deg) translateZ(50px);
background-color: white;
}

`}</style>
  )
}