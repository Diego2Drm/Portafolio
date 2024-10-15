import React, { useContext, useState } from "react";
import { ProjectsModal } from "./ProjectsModal";
import { DataContext } from "../../Context/Context";
import { motion } from "framer-motion";

function Projects() {
  const [openModal, setOpenModal] = useState(false);

  const context = useContext(DataContext);

  const handleInfo = (title, description, Img,liveSite,repository,skills) => {
    context.setAddTitle(title);
    context.setAddDescription(description);
    context.setAddImg(Img);
    context.setAddLink(liveSite);
    context.setAddRepository(repository);
    context.setaddSkills(skills);
    setOpenModal(true);
  };

  return (
    <section
      id="Projects"
      className="min-h-screen w-full p-5 pb-10  lg:pl-64 lg:pr-10 lg:p-0"
    >
      <h2 className="text-blue-500 font-bold text-3xl mb-5 tracking-[5px]">
        Proyectos
      </h2>
      <div className="lg:flex flex-wrap justify-evenly relative">
        {context.info.map((project) => (
          <article key={project.id} className="mb-10 lg:w-80">
            <motion.div
              className="w-[335px] h-44 overflow-hidden  border-4 border-white rounded-xl"
              onClick={() =>
                handleInfo(project.title, project.description, project.img,project.LiveSite,project.Repository,project.Skill)
              }
              initial={{ opacity: 0}}
              whileInView={{opacity: 1, transition: {
                duration: 2, delay: project.id / 2,
              } }}
            >
              <img
                src={project.img}
                alt={project.id}
                className="w-full cursor-pointer hover:scale-125 duration-700"
              />
            </motion.div>
          </article>
        ))}
        <ProjectsModal open={openModal} close={() => setOpenModal(false)} />
      </div>
    </section>
  );
}

export { Projects };
