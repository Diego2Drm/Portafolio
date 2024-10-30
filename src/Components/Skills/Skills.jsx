import React from "react";
import tailwind from "../../assets/tailwind-css-icon.png";
import gitLogo from "../../assets/git-logo.png";
import bootstrap from "../../assets/bootstrap.png";
import typescript from "../../assets/typescript.png";
import { motion } from "framer-motion";

function Skills() {

  const imgVariants = (delay) => {
   return {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
        delay: delay,
      }
    }
   }
  };

  return (
    <section
      id="Skills"
      className="p-5 min-h-screen lg:pl-64 pr-10 lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(3, minmax(0, 1fr))]"
    >
      <h2 className="text-blue-500 font-bold text-3xl mb-5 tracking-[5px] col-span-2 lg:mb-0">
        Habilidades
      </h2>

      <div className="md:pl-10">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Lenguaje</h4>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-10 lg:px-5">
          <figure className="flex flex-col text-lg">
            <motion.div variants={imgVariants(.5)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="text-[#e34c26] text-6xl md:text-8xl">
              <ion-icon name="logo-html5"></ion-icon>
            </motion.div>
            <figcaption className="italic text-white">HTML 5</figcaption>
          </figure>

          <figure className="flex flex-col text-white text-lg">
            <motion.div variants={imgVariants(.7)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="text-[#2965f1] text-6xl md:text-8xl">
              <ion-icon name="logo-css3"></ion-icon>
            </motion.div>
            <figcaption className="italic">CSS 3</figcaption>
          </figure>

          <figure className="flex flex-col text-white text-lg">
            <motion.div variants={imgVariants(.9)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="text-[#F0DB4F] text-6xl md:text-8xl">
              <ion-icon name="logo-javascript"></ion-icon>
            </motion.div>
            <figcaption className="italic">JavaScript</figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-5 md:pl-10 md:mt-0">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Frameworks</h4>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-start lg:gap-10 lg:px-5">
          <figure className="flex flex-col items-center lg:items-start">
            <motion.img variants={imgVariants(1)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="w-[60px] h-[60px] md:w-24 md:h-24" src={tailwind} alt="tailwind css" />
            <figcaption className="italic mt-[18px] text-white">
              Tailwind CSS
            </figcaption>
          </figure>
          <figure className="text-lg text-white">
            <motion.div variants={imgVariants(1.2)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="text-pink-400 text-6xl md:text-8xl">
              <ion-icon name="logo-sass"></ion-icon>
            </motion.div>
            <figcaption className="italic">Sass</figcaption>
          </figure>
          <figure className="flex flex-col items-center lg:items-start">
            <motion.img variants={imgVariants(1.4)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="w-[60px] h-[60px] md:w-24 md:h-24" src={bootstrap} alt="bootstrap-5" />
            <figcaption className="italic mt-[18px] text-white">Bootstrap 5</figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-5 md:pl-10 md:mt-0">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Librerías</h4>
        <div className="w-full flex items-center justify-center lg:justify-start gap-5">
          <figure className="flex flex-col items-center lg:items-start">
            <motion.div variants={imgVariants(1.6)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="text-[#5fd6f6] text-6xl md:text-8xl">
              <ion-icon name="logo-react"></ion-icon>
            </motion.div>
            <figcaption className="italic mt-5 text-white">React Js + </figcaption>
          </figure>
          <figure className="flex flex-col items-center lg:items-start">
            <motion.img variants={imgVariants(1.8)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="w-[60px] h-[60px] md:w-24 md:h-24" src={typescript} alt="typeScript" />
            <figcaption className="italic mt-8 text-white">TypeScript</figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-5 md:pl-10 md:mt-0">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">
          Control De Versiones
        </h4>
        <figure className="w-full flex flex-col items-center lg:items-start">
          <motion.img variants={imgVariants(2)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8}} className="w-[60px] h-[60px] md:w-24 md:h-24" src={gitLogo} alt="gitLogo" 
          />
          <figcaption className="italic mt-5 text-white">Git</figcaption>
        </figure>
      </div>
    </section>
  );
}

export { Skills };
