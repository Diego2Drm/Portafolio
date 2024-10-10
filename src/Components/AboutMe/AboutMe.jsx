import React from "react";
import gitHubImg from "../../assets/github.png";
import frontendImg from "../../assets/frontendMentor.png";
import linkedin from "../../assets/linkedin.png";
import { motion, transform, useMotionValue, useSpring, useTransform } from "framer-motion";

function AboutMe() {
  const downImg = () => {
    return {
      hiddenImg: {
        y: -200,
        opacity: 0,
      },
      showImg: {
        y: 0,
        opacity: 1,
        transition: { duration: 2, delay: 1.2 },
      },
    };
  };

  const uptext = () => {
    return {
      hiddenText: {
        y: 200,
        opacity: 0,
      },
      showText: {
        y: 0,
        opacity: 1,
        transition: { duration: 2, delay: 1.2 },
      },
    };
  };


  return (
    <section
      id="AboutMe"
      className="min-h-screen pt-28 p-5 lg:pl-64 lg:pr-10 lg:pt-14"
    >
      <motion.h2
        className="text-xl text-Text font-bold md:text-5xl text-shadow mb-5"
        initial={{ y: -300 }}
        animate={{ y: 0, transition: { duration: 2, delay: 1.5 } }}
      >
        Front-End Web Development
      </motion.h2>

      <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
        <motion.a
          href=""
          className="text-white p-2 bg-red-700 rounded-lg my-4 block w-40 text-center shadow-sm shadow-white hover:bg-red-900 hover:shadow-lg hover:shadow-red-500"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotate: 360,
            transition: { duration: 2, delay: 1.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Descargar C.V
        </motion.a>
        <motion.p
          className="flex text-blue-300 items-center gap-3"
          initial={{ x: -700, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 2, delay: 1.5 },
          }}
        >
          <ion-icon name="mail-outline"></ion-icon>
          <span>diego.ramirez2d03@gmail.com</span>
        </motion.p>
      </div>

      <div className="px-3">
        <div className="flex flex-wrap gap-x-8">
          <a
            href="https://www.linkedin.com/in/diego-ramirez-b8220b314/"
            className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]"
            target="_blank"
          >
            <motion.img
              className="w-7 lg:w-10"
              src={linkedin}
              alt="linkedin"
              variants={downImg()}
              initial="hiddenImg"
              animate="showImg"
            />
            <motion.span
              variants={uptext()}
              initial="hiddenText"
              animate="showText"
            >
              Linkedin
            </motion.span>
          </a>

          <a
            href=""
            className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]"
            target="_blank"
          >
            <motion.img
              className="w-7 lg:w-10 bg-blue-100"
              src={gitHubImg}
              alt="github-logo"
              variants={downImg()}
              initial="hiddenImg"
              animate="showImg"
            />
            <motion.span
              variants={uptext()}
              initial="hiddenText"
              animate="showText"
            >
              Git-Hub
            </motion.span>
          </a>

          <a
            href=""
            className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]"
            target="_blank"
          >
            <motion.img
              className="w-7 lg:w-10"
              src={frontendImg}
              alt="frontend-logo"
              variants={downImg()}
              initial="hiddenImg"
              animate="showImg"
            />
            <motion.span
              variants={uptext()}
              initial="hiddenText"
              animate="showText"
            >
              Frontend-Mentor
            </motion.span>
          </a>
        </div>
      </div>

      <article className="lg:flex flex-row-reverse items-center ">
        <div className="flex justify-center my-4 lg:w-1/2">
          <motion.img
            src="https://placehold.co/250x250"
            alt="i,am"
            className="rounded-full lg:w-96 img-shadow
            "
            animate={{
              scale: [.5, 1, 1, .5, .5, 1],
              rotate: [0, 0, 180, 180, 0, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%", "50%"]
            }}
            transition={{
              delay: 3,
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1
            }}
          />
        </div>
        <motion.div className="lg:w-1/2"
        initial={{ x: -400, opacity: 0,}}
        animate= {{ x: 0, opacity: 1, transition:{ duration: 4, delay: 3}}}
        >
          <h3 className="text-white lg:text-2xl font-bold">
            Diego Ramírez de Diego
          </h3>
          <p className="text-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dolor aperiam, natus corrupti dignissimos recusandae eligendi
            ratione a ea unde assumenda, mollitia pariatur quidem! Ipsam illo
            recusandae officiis doloribus vitae?
          </p>
        </motion.div>
      </article>
    </section>
  );
}

export { AboutMe };
