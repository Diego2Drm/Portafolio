import React from "react";
import Html from "../../assets/html.png"
import css from "../../assets/css3.png"
import js from "../../assets/JavaScript_Logo.png"
import tailwind from "../../assets/tailwind-css-icon.png"
import react from "../../assets/react.png"

function Skills() {
  return (
    <section id="Skills" className="p-5 min-h-screen">
      <h2 className="text-blue-500  text-3xl mb-5 tracking-[5px]">Habilidades</h2>
      <div className="my-10">
        <h4 className="text-blue-400 pl-6 text-2xl">Lenguaje</h4>
        
        <div className="flex flex-wrap justify-center pt-5 gap-2">
          <article className="flex flex-col items-center text-white text-lg">
            <img className="w-28" src={Html} alt="Html5" />
            <p >HTML 5</p>
          </article>
          <article className="flex flex-col items-center text-white text-lg">
            <img className="w-28" src={js} alt="javascript" />
            <p>JavaScript</p>
          </article>
          <article className="flex flex-col items-center text-white text-lg">
            <img className="w-44" src={css} alt="css 3" />
            <p>CSS 3</p>
          </article>

        </div>
        
        <div className="my-10">
          <h4 className="text-blue-400 pl-6 text-2xl">Frameworks</h4>
          <article className="flex pt-5 flex-col items-center text-white text-lg">
            <img className="w-36" src={tailwind} alt="tailwind css" />
            <p>Tailwind CSS</p>
          </article>
        </div>

      </div>
      <div className="my-10">
        <h4 className="text-blue-400 pl-6 text-2xl">Librerías</h4>
        <article className="flex pt-5 flex-col items-center text-white text-lg">
          <img className="w-36" src={react} alt="react js" />
          <p>React Js</p>
        </article>
      </div>

    </section>
  );
};

export { Skills };