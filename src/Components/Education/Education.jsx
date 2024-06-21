import React from "react";

function Education() {
  return (
    <section id="Education" className="w-full flex flex-col items-center gap-10 min-h-screen mb-10 lg:pl-64">
      <h2 className="text-blue-500 font-bold text-3xl tracking-[5px]">Educación</h2>
      
      <div className="lg:flex flex-wrap gap-4 xl:gap-52 xl:mt-5">
        <figure className="w-80">
          <img className="rounded-3xl" src="https://placehold.co/320x320" alt="diplomaImg" />
          <figcaption className="text-white text-lg pl-5 italic font-semibold">Title</figcaption>
        </figure>
        
        <figure className="w-80">
          <img className="rounded-3xl" src="https://placehold.co/320x320" alt="diplomaImg" />
          <figcaption className="text-white text-lg pl-5 italic font-semibold">Title</figcaption>
        </figure>
        
        <figure className="w-80">
          <img className="rounded-3xl" src="https://placehold.co/320x320" alt="diplomaImg" />
          <figcaption className="text-white text-lg pl-5 italic font-semibold">Title</figcaption>
        </figure>
      </div>


    </section>
  );
};

export { Education };