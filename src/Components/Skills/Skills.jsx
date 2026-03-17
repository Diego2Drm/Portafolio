import React from "react";
import { Languages } from "./Languages";
import { CubeFrameworks } from "./CubeFrameworks";
import { PulseStyles } from "./PulseStyles";
import { GitSpring } from "./GitSpring";
import { ReactjsSpring } from "./ReactjsSpring";

function Skills() {

  return (
    <section
      id="Skills"
      className="p-5 min-h-screen lg:pl-64 pr-10 lg:grid lg:grid-cols-2 md:mb-10"
    >
      <h2 className="text-blue-500 font-bold text-3xl mb-5 tracking-[5px] col-span-2 lg:mb-0">
        Habilidades
      </h2>

      <article>
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Lenguaje</h4>

        <div className="flex flex-wrap justify-center md:justify-start lg:gap-10">
          <Languages />
        </div>
      </article>


      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Frameworks</h4>
        <div className="w-full flex items-center justify-center md:justify-start">
          <CubeFrameworks />
        </div>
      </article>

      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Herramientas de estilo CSS</h4>
        <div className="flex flex-wrap justify-center md:justify-start">
          <PulseStyles />
        </div>
      </article>


      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-8 md:pl-0">Control De Versiones</h4>
        <div className="w-full flex items-center justify-center md:justify-start">
          <GitSpring />
        </div>
      </article>

      <article className="mt-10 lg:mt-0">
        <h4 className="text-blue-300 font-medium pl-6 text-2xl mb-5 md:pl-0">Librearias</h4>
        <div className="w-full flex justify-center md:justify-start md:ml-5">
          <ReactjsSpring />
        </div>
      </article>


    </section>
  );
}

export { Skills };
