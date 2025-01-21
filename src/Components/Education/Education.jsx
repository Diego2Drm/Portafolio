import React, { useContext, useState } from "react";
import { Modal } from "./Modal";
import { DataContext } from "../../Context/Context";
import { motion } from "framer-motion";
import { courseMap } from "../../utils/images";


function Education() {
  const [open, setOpen] = useState(false);
  const context = useContext(DataContext);
  const showCertificates = (url) => {
    setOpen(!open);
    context.setShowCertificateImg(url);
  };

  return (
    <section
      id="Education"
      className="w-full flex flex-col p-5 gap-10 min-h-screen mb-10 lg:pl-64 lg:items-start"
    >
      <motion.h2 initial={{opacity: 0, x: -60}} whileInView={{opacity: 1, x: 0, transition: { duration: 1, delay: 1}}} viewport={{once: true, amount: 0.8}} className="text-blue-500 font-bold text-3xl tracking-[5px]">
        Educación
      </motion.h2>

      <article className="flex flex-wrap gap-10 xl:mt-5">
        {context.certificateImg.map((item) => (
          <div className="w-80" key={item.id}>
            <motion.figure
              className="w-80 mb-5 border-2 border-blue-500 rounded-3xl overflow-hidden"
              onClick={() => showCertificates(item.certification)}
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {
                duration: 1, delay: item.id / 9
              }}}
              viewport={{once: true, amount: 0.8}}
            >
              <img
                className="rounded-3xl duration-500 hover:scale-125 cursor-pointer"
                src={courseMap[item.certification]}
                alt="certificate"
              />
            </motion.figure>

            <Modal open={open} onclose={() => setOpen(false)} />
          </div>
        ))}
      </article>
    </section>
  );
}

export { Education };
