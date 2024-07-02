import React, { useContext } from "react";
import { CertificatesContext } from "./Context";

function Modal({ open, onclose }) {

  const context = useContext(CertificatesContext)

  return (
      <section className={`fixed flex flex-col z-10 inset-0 justify-center items-center transition-colors ${open ? "visible bg-black/80" : "invisible"}`}>
        <div className="text-6xl text-white cursor-pointer flex mb-8"
          onClick={onclose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <img className="lg:w-[800px] xl:w-[950px]" src={context.certificateImg} alt="" />
      </section>
  )
}

export { Modal };