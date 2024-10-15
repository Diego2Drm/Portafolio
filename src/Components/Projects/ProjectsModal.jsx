import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";

function ProjectsModal({ open, close }) {
  const context = useContext(DataContext);

  return (
    <article
      className={`bg-black/80 border-8 border-[#1C5E8F] shadow-xl shadow-[#1C5E8F] absolute top-10 lg:w-[700px] md:h-auto pb-8 rounded-3xl ${
        open ? "visible" : "invisible"
      } px-10 py-5`}
    >
      <div
        className="text-3xl cursor-pointer w-[30px] h-[30px] rounded-full text-red-500"
        onClick={close}
      >
        <ion-icon
          name="close-circle-sharp"
          className="cursor-pointer"
        ></ion-icon>
      </div>

      <figure className="flex justify-end">
        <img className="w-14" src={context.addImg} alt={context.addTitle} />
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
        <div className="flex gap-5 pt-5">
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
    </article>
  );
}

export { ProjectsModal };
