import React from "react";

function Education() {
  return (
    <section id="Education" className="w-full flex flex-col items-center gap-10 min-h-screen mb-10">
      <h2 className="text-blue-500 text-3xl tracking-[5px]">Educación</h2>
      
      <div>
        <img className="rounded-3xl" src="https://placehold.co/320x320" alt="diplomaImg" />
        <p className="text-white text-lg pl-5">Title</p>
      </div>

      <div>
        <img className="rounded-3xl" src="https://placehold.co/320x320" alt="diplomaImg" />
        <p className="text-white text-lg pl-5">Title</p>
      </div>

      <div>
        <img className="rounded-3xl" src="https://placehold.co/320x320" alt="diplomaImg" />
        <p className="text-white text-lg pl-5">Title</p>
      </div>


    </section>
  );
};

export { Education };