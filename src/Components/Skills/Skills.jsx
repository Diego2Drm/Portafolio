import React from "react";
import { motion } from "framer-motion";
import htmlImg from '../../assets/skills-images/html-5.png'
import cssImg from '../../assets/skills-images/css3.png'
import javascriptImg from '../../assets/skills-images/javascript.png'
import tailwindImg from '../../assets/skills-images/tailwind-css.png'
import sasstImg from '../../assets/skills-images/sass.png'
import bootstrapImg from '../../assets/skills-images/bootstrap-5.png'
import reactImg from '../../assets/skills-images/react.png'
import typescriptImg from '../../assets/skills-images/typescript.png'
import gitImg from '../../assets/skills-images/git.png'



function Skills() {

  const languages = [
    {
      title: "HTML 5",
      img: htmlImg
    },
    {
      title: "Css 3",
      img: cssImg,
    },
    {
      title: "JavaScript",
      img: javascriptImg,
    },
  ];

  const frameworks = [
    {
      title: "Tailwind Css",
      img: tailwindImg,
    },
    {
      title: "Sass",
      img: sasstImg,
    },
    {
      title: "Bootstrap 5",
      img: bootstrapImg,
    },
  ];

  const libraries = [
    {
      title: "React Js",
      img: reactImg,
    },
    {
      title: "TypeScript",
      img: typescriptImg,
    },
  ]

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

  const text = () => {
    return{
      textHidden: {
        opacity: 0,
        scale: 0,
        transition: {
          duration: 1,
          ease: "easeInOut", 
        }
      },
      textShow: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeInOut", 
        }
      },
    }
  }

  return (
    <section
      id="Skills"
      className="p-5 min-h-screen lg:pl-64 pr-10 lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(3, minmax(0, 1fr))]"
    >
      <h2 className="text-blue-500 font-bold text-3xl mb-5 tracking-[5px] col-span-2 lg:mb-0">
        Habilidades
      </h2>

      <article>
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Lenguaje</h4>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start lg:gap-10">
          {
            languages.map((language, i) => (
              <figure key={i} className="flex flex-col">
                <motion.img variants={imgVariants(i * .2)} initial="offscreen" whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} src={language.img} alt={language.title} />
                <motion.figcaption variants={text()} initial="textHidden" whileInView="textShow" viewport={{ once: true, amount: 0.8 }} className="text-white text-center italic text-lg">{language.title}</motion.figcaption>
              </figure>
            ))
          }
        </div>
      </article>

      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Frameworks</h4>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:justify-start lg:gap-10">
          {
            frameworks.map((framework, i) => (
              <figure key={i} className="flex flex-col items-center lg:items-start">
                <motion.img variants={imgVariants(i * .2)} initial="offscreen" whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} src={framework.img} alt={framework.title} />
                <motion.figcaption variants={text()} initial="textHidden" whileInView="textShow" viewport={{ once: true, amount: 0.8 }} className="text-white italic text-lg">{framework.title}</motion.figcaption>
              </figure>
            ))
          }
        </div>
      </article>

      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Librerías</h4>
        <div className="w-full flex items-center justify-center md:justify-start gap-5">
          {
            libraries.map((library, i) => (
              <figure key={i} className="flex flex-col">
                <motion.img variants={imgVariants(i * .2)} initial="offscreen" whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} src={library.img} alt={library.title} />
                <motion.figcaption variants={text()} initial="textHidden" whileInView="textShow" viewport={{ once: true, amount: 0.8 }} className="text-white text-center italic text-lg">{library.title}</motion.figcaption>
              </figure>
            ))
          }
        </div>
      </article>

      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Control De Versiones</h4>
        <div className="w-full flex items-center justify-center md:justify-start gap-5">
          <figure className="flex flex-col">
            <motion.img variants={imgVariants(.2)} initial="offscreen"
              whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} src={gitImg} alt="git"
            />
            <motion.figcaption variants={text()} initial="textHidden" whileInView="textShow" viewport={{ once: true, amount: 0.8 }} className="text-white text-center italic text-lg">Git</motion.figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
}

export { Skills };
