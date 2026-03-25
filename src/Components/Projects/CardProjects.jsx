import React, { useState } from "react";
import { ImageMap } from "../../utils/images";

function CardProjects({ project, openCard, handleOpenCard }) {

  const [openCard, setOpenCard] = useState(null);

  const handleOpenCard = (id) => {
    setOpenCard(openCard === id ? null : id)
  }


  // <div className="lg:flex lg:flex-wrap gap-x-14 ">
  //   {context.info.map((project) => (
  //     <CardProjects
  //       key={project.id}
  //       project={project}
  //       openCard={openCard}
  //       handleOpenCard={handleOpenCard}
  //     />
  //   ))}
  // </div>

  // const handleOpenCard = (id) => {
  //   setOpenCard(prev => ({
  //     ...prev,
  //     [id]: !prev[id]   // alterna solo la tarjeta clicada
  //   }));
  // };

  //  className={`${openCard[pro.id] ? 'w-80' : 'w-40'} bg-white flex`}

  return (
    <article className="my-4">
      <ul className="flex gap-3 flex-col">
        <li
          className={`${openCard === project.id ?
            'h-[550px] md:h-[300px] md:w-[700px] lg:w-[750px] xl:w-[750px]' :
            'h-[160px] md:w-[300px] md:h-[200px]'} 
            flex flex-col cursor-pointer transition-all duration-300 ease-in-out w-[340px] rounded-lg border-4 border-white overflow-hidden md:flex-row md:p-2 lg:p-1`}
          onClick={() => handleOpenCard(project.id)}>

          <img src={ImageMap[project.img]} alt={project.title}
            className={`
            ${openCard === project.id ? 'w-[300px]' : 'w-full'}
              scale-105 hover:scale-125 transition-all lg:scale-125 lg:hover:scale-150`}
          />

          <div
            className={`${openCard === project.id ?
              'translate-y-3 z-0 md:translate-y-0 md:translate-x-3' :
              '-translate-y-24 -z-10 md:-translate-y-0 md:-translate-x-40'} 
            transition-all duration-300 ease-in-out p-2 text-white`}>
            <h4 className="font-bold text-xl">
              {project.title}
            </h4>
            <p>
              <span className="italic font-semibold">Descripción: </span>
              {project.description}
            </p>
            <span>Herramientas utilizadas:</span>
            <ul className="list-disc list-inside columns-2">
              {project.Skill.map(skill =>
                <li key={skill}>{skill}</li>
              )}
            </ul>

            <div className="flex justify-between mt-4 px-2">
              <a href={project.Repository} target="_blank" className="text-shadow">
                Repositorio Github
              </a>
              <a href={project.LiveSite} className="text-shadow">
                Live Site
              </a>
            </div>
          </div>
        </li>
      </ul>
    </article>
  )
};

export { CardProjects };