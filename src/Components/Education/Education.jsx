import React from "react";

function Education() {

  const imgLinks = [
    "https://i.ibb.co/1qPRTSZ/frontend-developer.jpg",
    "https://i.ibb.co/X495yzB/curso-definitivo-html-css.jpg",
    "https://i.ibb.co/BHDt1Fy/curso-basico-tailwind-css.jpg",
    "https://i.ibb.co/jW32P6h/reactjs-vite-tailwindcss.jpg",
    "https://i.ibb.co/r0ZWQcX/manipulacion-arrays-js.jpg",
    "https://i.ibb.co/LSS56J8/mobile-first.jpg"
  ]

  return (
    <section id="Education" className="w-full flex flex-col items-center gap-10 min-h-screen mb-10 lg:pl-64 lg:items-start xl:pl-96">
      <h2 className="text-blue-500 font-bold text-3xl tracking-[5px]">Educación</h2>

      <div className="lg:flex flex-wrap gap-5 lg:justify-center xl:gap-32 xl:mt-5">

        {
          imgLinks.map((link, index) => (
            <figure key={index} className="w-80 mb-5 border-2 border-blue-500 rounded-3xl">
              <img className="rounded-3xl" src={link} alt="certificate" />
            </figure>
          ))
        }


      </div>


    </section>
  );
};

export { Education };