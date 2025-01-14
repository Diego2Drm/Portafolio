import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import { ImageMap } from "../../utils/images";

function ProjectsModal({ open, close }) {
  const context = useContext(DataContext);

  return (
    <article
      className={`bg-black/80 fixed inset-0 z-10 w-full h-screen ${open ? "visible" : "invisible"
        } flex justify-center items-center`}
    >
      <div className="p-4 lg:w-[40rem] lg:border-4 lg:border-Background2 rounded-xl">
        <figure className="flex justify-between">
          <div
            className="text-3xl cursor-pointer w-[30px] h-[30px] rounded-full text-red-500 lg:text-4xl"
            onClick={close}
          >
            <ion-icon
              name="close-circle-sharp"
              className="cursor-pointer"
            ></ion-icon>
          </div>
          <img className="w-28 lg:w-32" src={ImageMap[context.addImg]} alt={context.addTitle} />
        </figure>

        <div className="flex flex-col gap-3 mt-4 text-white">
          <h4 className="font-bold text-2xl">{context.addTitle}</h4>
          <p className="font-semibold">Descipcón: {context.addDescription}</p>
          Herramientas Utilizadas:
          <ul className="italic list-disc pl-10">
            <span className="font-semibold"> </span>
            {context.addSkills.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="flex justify-between pt-5">
            <a
              className="font-semibold hover:text-black text-shadow"
              href={context.addLink}
              target="_blank"
            >
              Live Site
            </a>
            <a
              className="font-semibold hover:text-black text-shadow"
              href={context.addRepository}
              target="_blank"
            >
              Repository Github
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export { ProjectsModal };
