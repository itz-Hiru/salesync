import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WORKFLOWS } from "../../utils/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WorkFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full bg-cyan-50/20 min-h-[80vh] p-10 flex flex-col justify-center items-center mt-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-3xl font-bold text-gray-900 text-center"
      >
        Use powerful SALESYNC Workflow, Designer For Your Industry
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {WORKFLOWS.map((workflow, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col bg-white items-center justify-center rounded-lg border border-gray-400 p-5"
            style={{ boxShadow: "-10px -10px 0px rgba(103, 232, 249, 0.5)" }}
          >
            <div className="mt-8 w-16 h-16 flex items-center justify-center rounded-full border-2 border-cyan-600">
              <workflow.icon className="text-3xl text-cyan-600" />
            </div>
            <h3 className="mt-8 font-semibold text-gray-900 text-xl">
              {workflow.title}
            </h3>
            <p className="mt-6 text-sm text-gray-500 text-center mb-16">
              {workflow.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkFlow;
