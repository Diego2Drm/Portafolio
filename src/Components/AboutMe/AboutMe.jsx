import React from "react";
import gitHubImg from "../../assets/github.png"
import frontendImg from "../../assets/frontendMentor.png"
import linkedin from "../../assets/linkedin.png"

function AboutMe() {
  return (
    <section id="AboutMe" className="min-h-screen pt-28 p-5 lg:pl-64 lg:pr-10 lg:pt-14">
      <h2 className="text-2xl text-Text font-bold md:text-3xl">Front-End Web Development</h2>
      <div className="flex justify-end lg:justify-start">
        <a href="" className="text-white p-2 bg-red-700 rounded-lg my-4 block w-40 text-center shadow-sm shadow-white">
          Descargar C.V
        </a>
      </div>

      <article className="p-3">

        <p className="flex text-blue-300 items-center gap-3">
          <ion-icon name="mail-outline"></ion-icon>
          <span>diego.ramirez2d03@gmail.com</span>
        </p>

        <div className="flex flex-wrap gap-x-8">
          <a href="https://www.linkedin.com/in/diego-ramirez-b8220b314/" className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]" target="_blank">
            <img className="w-7 lg:w-10" src={linkedin} alt="frontend-logo" />
            Linkedin
          </a>

          <a href="" className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]" target="_blank">
            <img className="w-7 lg:w-10 bg-blue-100" src={gitHubImg} alt="github-logo" />
            Git-Hub
          </a>

          <a href="" className="flex my-5 gap-4 text-blue-300 items-center hover:text-[#40A2E3]" target="_blank">
            <img className="w-7 lg:w-10" src={frontendImg} alt="frontend-logo" />
            Frontend-Mentor
          </a>
        </div>
      </article>

      <article className="lg:flex flex-row-reverse items-center ">
        <div className="flex justify-center my-4 lg:w-1/2">
          <img src="https://placehold.co/250x250" alt="i,am" className="rounded-full lg:w-96" />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-white lg:text-2xl font-bold">Diego Ramírez de Diego</h3>
          <p className="text-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor aperiam, natus corrupti dignissimos recusandae eligendi ratione a ea unde assumenda, mollitia pariatur quidem! Ipsam illo recusandae officiis doloribus vitae?
          </p>
        </div>
      </article>

    </section>
  );
};


export { AboutMe };