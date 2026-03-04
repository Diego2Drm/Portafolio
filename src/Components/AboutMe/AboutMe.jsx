import React from "react";
import { motion } from "framer-motion";
import cv from '../../docs/diego_cv_programador-front-end.pdf'
import { ImgsAboutMe } from "../imgs/imgsAboutMe";
import { aboutMeVariants, cvVariants, downImgsVariants, emailVariants, textShowVariants, uptextVariants } from "../animations";

function AboutMe() {


  return (
    <section id="AboutMe" className="min-h-screen pt-28 p-5 lg:pl-64 lg:pr-10 lg:pt-14">
      <motion.h2
        className="text-xl text-Text font-bold md:text-5xl text-shadow mb-5"
        initial={{ y: -300 }}
        animate={{ y: 0, transition: { duration: 2, delay: 1.5 } }} >
        Front-End Web Development
      </motion.h2>

      <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
        <motion.a
          href={cv}
          download={cv}
          className="text-white p-2 bg-red-700 rounded-lg my-4 block w-40 text-center shadow-sm shadow-white hover:bg-red-900 hover:shadow-lg hover:shadow-red-500 transition-all"
          variants={cvVariants}
          initial="hidden"
          animate="show"
          whileTap={{ scale: 0.9 }}
        >
          Descargar C.V
        </motion.a>
        <motion.p
          className="flex text-blue-300 items-center gap-3"
          variants={emailVariants}
          initial="hidden"
          animate="show"
        >
          <ion-icon name="mail-outline"></ion-icon>
          <span>diego.ramirez2d03@gmail.com</span>
        </motion.p>

        <div className="flex flex-wrap gap-x-8">
          <a
            href="https://www.linkedin.com/in/diego-ramirez-b8220b314/"
            className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]"
            target="_blank"
          >
            <motion.img
              className="w-7 lg:w-10"
              src={ImgsAboutMe.linkedin}
              alt="linkedin"
              variants={downImgsVariants()}
              initial="hiddenImg"
              animate="showImg"
            />
            <motion.span
              variants={uptextVariants()}
              initial="hiddenText"
              animate="showText"
            >
              Linkedin
            </motion.span>
          </a>

          <a
            href="https://github.com/Diego2Drm"
            className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]"
            target="_blank"
          >
            <motion.img
              className="w-7 lg:w-10 bg-blue-100"
              src={ImgsAboutMe.github}
              alt="github-logo"
              variants={downImgsVariants()}
              initial="hiddenImg"
              animate="showImg"
            />
            <motion.span
              variants={uptextVariants()}
              initial="hiddenText"
              animate="showText"
            >
              Git-Hub
            </motion.span>
          </a>

          <a
            href="https://www.frontendmentor.io/profile/Diego2Drm"
            className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]"
            target="_blank"
          >
            <motion.img
              className="w-7 lg:w-10"
              src={ImgsAboutMe.mentor}
              alt="frontend-logo"
              variants={downImgsVariants()}
              initial="hiddenImg"
              animate="showImg"
            />
            <motion.span
              variants={uptextVariants()}
              initial="hiddenText"
              animate="showText"
            >
              Frontend-Mentor
            </motion.span>
          </a>
        </div>
      </div>

      <article className="lg:flex flex-row-reverse items-center ">
        <div className="flex justify-center my-4 lg:w-1/2 lg:my-0">
          <motion.img
            src={ImgsAboutMe.AboutMe}
            alt="i am"
            width={250}
            height={250}
            className="rounded-full lg:w-80 img-shadow"
            variants={aboutMeVariants}
            initial="hidden"
            animate="show"
          />
        </div>
        <div className="lg:w-1/2">
          <motion.h3
            variants={textShowVariants(.5)}
            initial="hiddenText"
            animate="showText"
            className="text-Text underline lg:text-2xl font-bold">
            Diego Ramírez de Diego
          </motion.h3>
          <div className="text-blue-100">
            <motion.p
              variants={textShowVariants(1)}
              initial="hiddenText"
              animate="showText">
              Soy de Puebla, México. Me motivé a ser desarrollador front-end porque siempre me ha llamado la atención crear cosas desde cero y me ha ayudado a mejorar mi creatividad. He realizado proyectos en los cuales he mejorado mi lógica de programación y también he aprendido diferentes formas de darle estilo a los proyectos.
            </motion.p>
            <motion.p
              variants={textShowVariants(1.5)}
              initial="hiddenText"
              animate="showText">
              Me enfoqué en aprender JavaScript como mi primer lenguaje de programación, ya que se utiliza en diversas áreas del front-end. El framework que utilizo es React.js, con sus diferentes formas de darle estilo, como CSS3, Tailwind CSS, Sass, Bootstrap 5 y CSS Modules.
            </motion.p>
            <motion.p
              variants={textShowVariants(2)}
              initial="hiddenText"
              animate="showText">
              Mi objetivo es trabajar para poner en práctica los conocimientos adquiridos en este camino de estudio en el desarrollo front-end y aprender nuevas técnicas de desarrollo. A largo plazo, me gustaría aprender React Native.
            </motion.p>
            <motion.p
              variants={textShowVariants(2.5)}
              initial="hiddenText"
              animate="showText">
              Me gusta estar informado sobre las actualizaciones de los diferentes lenguajes de programación a través de las redes sociales.
            </motion.p>
          </div>
        </div>
      </article>
    </section>
  );
}

export { AboutMe };
