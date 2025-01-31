import React, { useState } from "react";
import { Link } from "react-scroll";

function NavBar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-10 flex justify-between items-center bg-Background py-6 px-4 text-white shadow-sm shadow-white
      lg:hidden">
        <Link
              className="text-2xl text-white"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Diego.
            </Link>
        <div className="text-2xl" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <nav className={`absolute w-1/2 h-screen bg-[#102C57] shadow-sm shadow-white z-20 border-t-2 p-7 top-20 ${open ? "right-0" : "-right-[1030px]"} transition-all duration-500`}>
          <ul className="*:text-lg flex flex-col items-center gap-10">
            <li> <Link
              activeClass="text-blue-300 border-b-2 border-blue-300 pb-[1px]"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Sobre Mi
            </Link>
            </li>
            <li>

              <Link
                activeClass="text-blue-300 border-b-2 border-blue-300 pb-[1px]"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-blue-300 border-b-2 border-blue-300 pb-[1px]"
                to="Education"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                Educación
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-blue-300 border-b-2 border-blue-300 pb-[1px]"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                Habilidades
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { NavBar };