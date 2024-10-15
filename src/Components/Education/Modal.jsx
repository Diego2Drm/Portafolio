import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";

function Modal({ open, onclose }) {

  const context = useContext(DataContext)

  return (
      <section className={`fixed flex flex-col z-10 inset-0 justify-center items-center transition-colors ${open ? "visible bg-black/25" : "invisible"}`}>
        <div className="text-6xl text-white cursor-pointer flex mb-8 hover:text-red-500"
          onClick={onclose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <img className="md:w-[550px] lg:w-[600px] rounded-xl" src={context.certificateImg} alt="" />
      </section>
  )
}

export { Modal };