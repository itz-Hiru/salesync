import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BENEFITS } from "../../utils/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full min-h-[80vh] bg-cyan-50/20 flex flex-col justify-center mt-24 p-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl text-center font-bold text-gray-900 mb-16"
      >
        Benefits of <span className="text-cyan-400">SALESYNC</span> in
        Distribution Business
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white flex flex-col rounded-lg py-10 px-5 items-center justify-center border border-gray-200/50 shadow-xs shadow-gray-800/50"
          >
            <benefit.icon className="bg-cyan-400 text-white text-5xl p-3 rounded-md mb-5" />
            <h3 className="text-center font-semibold text-gray-800 text-[15px] mb-3">
              {benefit.title}
            </h3>
            <p className="text-center text-sm text-gray-500 mb-5">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Benefits;
