import React from "react";
import data from './projects.json'

function Projects() {
  return (
    <section id="Projects" className="min-h-screen w-full p-5 pb-10">
      {
        data.map(project => (
          <article key={project.id} className="mb-10">

            <div className="w-[335px] h-44 overflow-hidden">
              <a href={project.LiveSite} target="_blank">
                <img src={project.img} alt={project.id} className="w-full" />
              </a>
            </div>

            <div className="pt-2">
              <h2 className="text-Text">
                Nombre: <span className="text-white">{project.title}</span>
              </h2>
              <p className="text-Text mt-2">
                Descripción: <span className="text-white">{project.description}</span>
              </p>

              <div className="text-Text mt-2">
                Lenguaje Utilizado:
                <div className="mt-1">
                  <p className="text-text2">{project.Skill[0]}</p>
                  <ul className="list-disc pl-9">
                    {project.reactJs.map((react, i) =>
                      <li key={i} className="text-white">{react}</li>
                    )}
                  </ul>
                </div>

                <div className="mt-2">
                  <p className="text-text2">{project.Skill[1]}</p>
                  <ul className="list-disc pl-9">
                    {project.tailwindCss.map((tailwind, i) =>
                      <li key={i} className="text-white">{tailwind}</li>
                    )}
                  </ul>
                </div>
              </div>

              <a href={project.Repository} target="_blank" className="underline text-text3 block mt-3">
                Repositorio GitHub
              </a>
            </div>
          </article>
        ))
      }

      <div className="flex justify-end">
        <button className="bg-gradient-to-r from-text3 to-Background2 text-white text-lg p-1 rounded-md">Ver más...</button>
      </div>
    </section>
  );
};

export { Projects };