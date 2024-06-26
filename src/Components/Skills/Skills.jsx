import React from "react";
import tailwind from "../../assets/tailwind-css-icon.png"
import git from "../../assets/git-logo.png"

function Skills() {
  return (
    <section id="Skills" className="p-5 min-h-screen lg:pl-64 xl:pl-96 pr-10 lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(3, minmax(0, 1fr))]">

      <h2 className="text-blue-500 font-bold text-3xl mb-5 tracking-[5px] col-span-2 lg:mb-0">Habilidades</h2>

      <div className="md:pl-10">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Lenguaje</h4>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-10 lg:px-5">
          <figure className="flex flex-col text-lg">
            <div className="text-[#e34c26] text-6xl md:text-8xl">
              <ion-icon name="logo-html5"></ion-icon>
            </div>
            <figcaption className="italic text-white">HTML 5</figcaption>
          </figure>

          <figure className="flex flex-col text-white text-lg">
            <div className="text-[#2965f1] text-6xl md:text-8xl">
              <ion-icon name="logo-css3"></ion-icon>
            </div>
            <figcaption className="italic">CSS 3</figcaption>
          </figure>

          <figure className="flex flex-col text-white text-lg">
            <div className="text-[#F0DB4F] text-6xl md:text-8xl">
              <ion-icon name="logo-javascript"></ion-icon>
            </div>
            <figcaption className="italic">JavaScript</figcaption>
          </figure>


        </div>

      </div>

      <div className="mt-5 md:pl-10 md:mt-0">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Frameworks</h4>
        <figure className="w-full flex flex-col items-center lg:items-start">
          <img className="w-24 h-24" src={tailwind} alt="tailwind css" />
          <figcaption className="italic mt-5 text-white">Tailwind CSS</figcaption>
        </figure>

      </div>

      <div className="mt-5 md:pl-10 md:mt-0">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Librerías</h4>
        <figure className="w-full flex flex-col items-center lg:items-start">
          <div className="text-[#5fd6f6] text-8xl">
            <ion-icon name="logo-react"></ion-icon>
          </div>
          <figcaption className="italic mt-5 text-white">React Js</figcaption>
        </figure>
      </div>

      <div className="mt-5 md:pl-10 md:mt-0">
        <h4 className="text-blue-400 pl-6 text-2xl mb-8 md:pl-0">Control De Versiones</h4>
        <figure className="w-full flex flex-col items-center lg:items-start">
          <img className="w-24 h-24" src={git} alt="git" />
          <figcaption className="italic mt-5 text-white">Git</figcaption>
        </figure>
      </div>

    </section >
  );
};

export { Skills };