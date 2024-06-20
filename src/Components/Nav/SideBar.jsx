import React, { useState } from "react";
import { Link } from "react-scroll";

function SideBar() {

  const [isOpen, setIsOpen] = useState(false)

  function handleOpen(){
    setIsOpen(!isOpen)
  }

  function handleIconOpen() {
    setIsOpen(true)
  }

  return (
    <aside className={`fixed left-0 shadow-md shadow-white bg-gradient-to-bl from-Background2 to-Background to-80% h-full p-5 z-10 ${isOpen ? "w-48" : "w-28"} hidden lg:flex lg:flex-col duration-500`}>

      <h2 className="text-2xl text-white duration-500">{isOpen ? "Diego." : "Die..."}</h2>

      <div className="absolute -right-3 top-6 text-white text-3xl cursor-pointer"
        onClick={handleOpen}>
        <ion-icon name={isOpen ? "arrow-back-circle" : "arrow-forward-circle"}></ion-icon>
      </div>

      <nav className="mt-10">
        <ul className="*:cursor-pointer flex flex-col gap-36 items-center">
          <li>
            <Link
              className="hover:bg-lightWhite flex justify-center items-center gap-4 p-3 text-blue-100"
              activeClass="text-blue-300 bg-lightWhite"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleIconOpen}
            >
              <div className="text-3xl">
                <ion-icon name="person"></ion-icon>
              </div>
              <span className={`${!isOpen && "hidden"} origin-left duration-700`}>Sobre Mi</span>
            </Link>
          </li>
          <li>

            <Link
              className="hover:bg-lightWhite flex justify-center items-center gap-4 p-3 text-blue-100"
              activeClass="text-blue-300 bg-lightWhite"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={handleIconOpen}
            >
              <div className="text-3xl">
                <ion-icon name="book"></ion-icon>
              </div>
              <span className={`${!isOpen && "hidden"} origin-left duration-700 `}>Proyectos</span>
            </Link>
          </li>

          <li>
            <Link
              className="hover:bg-lightWhite flex justify-center items-center gap-4 p-3 text-blue-100"
              activeClass="text-blue-300 bg-lightWhite"
              to="Education"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={handleIconOpen}
            >
              <div className="text-3xl">
                <ion-icon name="school"></ion-icon>
              </div>
              <span className={`${!isOpen && "hidden"} origin-left duration-700`}>Educación</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-lightWhite flex justify-center items-center gap-4 p-3 text-blue-100"
              activeClass="text-blue-300 bg-lightWhite"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={handleIconOpen}
            >
              <div className="text-3xl">
                <ion-icon name="code"></ion-icon>
              </div>
              <span className={`${!isOpen && "hidden"} origin-left duration-700`}>Habilidades</span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export { SideBar };