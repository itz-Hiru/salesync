import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { USECASES } from "../../utils/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="usecases"
      ref={ref}
      className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 px-4 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-gray-900 mb-10"
      >
        What makes Salesync different?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {USECASES.map((usecase, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: index * 0.4 }}
            className="flex flex-col gap-3 rounded-lg overflow-hidden"
          >
            <div className="w-full h-56 rounded-t-lg overflow-hidden">
              <img
                src={usecase.image}
                alt={usecase.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h4 className="text-center text-slate-950 text-xl font-bold p-4">
              {usecase.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
