import React from "react";
import gitHubImg from "../../assets/github.png"
import frontendImg from "../../assets/frontendMentor.png"
import linkedin from "../../assets/linkedin.png"

function Contact() {
  return (
    <section id="Contact" className="h-[50vh] p-5">
      <h2 className="text-blue-500  text-3xl mb-5 tracking-[5px]">Contacto</h2>
      <div>
        <div className="flex text-blue-300 items-center gap-3 text-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <p>diego.ramirez2d03@gmail.com</p>
        </div>

        <a href="https://www.linkedin.com/in/diego-ramirez-b8220b314/" className="flex my-5 gap-4 text-blue-300 underline items-center" target="_blank">
          <img className="w-14" src={linkedin} alt="frontend-logo" />Linkedin
        </a>
        
        <a href="" className="flex my-5 gap-4 text-blue-300 underline items-center" target="_blank">
          <img className="w-14 bg-white" src={gitHubImg} alt="github-logo" />Git-Hub
        </a>
        
        <a href="" className="flex my-5 gap-4 text-blue-300 underline items-center" target="_blank">
          <img className="w-14" src={frontendImg} alt="frontend-logo" />Frontend-Mentor
        </a>


      </div>
    </section>
  );
};

export { Contact };