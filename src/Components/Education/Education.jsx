import React, { useContext, useState } from "react";
import { Modal } from "./Modal";
import { CertificatesContext } from "./Context";


function Education() {
  const [open, setOpen] = useState(false);
  const context = useContext(CertificatesContext);
  const showCertificates = (url) => {
    setOpen(!open);
    context.setCertificateImg(url)
  };

  return (
    <section id="Education" className="w-full flex flex-col items-center gap-10 min-h-screen mb-10 lg:pl-64 lg:items-start xl:pl-96">
      <h2 className="text-blue-500 font-bold text-3xl tracking-[5px]">Educación</h2>

      <div className="lg:flex flex-wrap gap-5 lg:justify-center xl:gap-32 xl:mt-5 ">
        {
          context.imgUrl.map(link => (
            <section key={link.id}>
              <figure className="w-80 mb-5 border-2 border-blue-500 rounded-3xl overflow-hidden"
                onClick={() => showCertificates(link.url)}>
                <img className="rounded-3xl hover:scale-125 cursor-pointer" src={link.url} alt="certificate" />
              </figure>

              <Modal open={open} onclose={() => setOpen(false)} />
            </section>
          ))
        }
      </div>
    </section>
  );
};

export { Education };