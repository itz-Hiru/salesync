import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LOGO from "../../assets/logo.png";
import { steps } from "../../utils/data";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.6,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.0, ease: "easeInOut" },
  },
};

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-16 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="text-3xl font-bold"
      >
        DMS Process Diagram
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-25 justify-center items-center mt-16">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg
            width="256"
            height="256"
            viewBox="0 0 256 256"
            className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="25%" stopColor="#0E7490" />
                <stop offset="50%" stopColor="#155E75" />
                <stop offset="100%" stopColor="#164E63" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="754"
              strokeDashoffset="754"
              animate={isInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 1.0, ease: "easeInOut" }}
            className="w-44 h-44 rounded-full bg-white flex items-center justify-center shadow-md z-10"
          >
            <img src={LOGO} alt="logo" className="w-28 h-auto" />
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-5 mt-10 md:mt-0"
        >
          {steps.map((step, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="bg-white p-4 rounded-md shadow-lg flex flex-row gap-4 items-center justify-center"
            >
              <div
                className="flex flex-col items-center justify-center border-4 w-18 h-18 bg-white shadow-md rounded-lg"
                style={{
                  borderColor: step.color,
                  boxShadow: `0 2px 10px ${step.color}`,
                }}
              >
                <p className="uppercase font-medium text-sm text-gray-700">
                  Step
                </p>
                <span className="text-2xl font-semibold -mt-2 text-shadow-md text-shadow-black/30">
                  {step.step}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold"
                  style={{
                    color: step.color,
                    textShadow: `0 0px 2px ${step.color}`,
                  }}
                >
                  {step.title}
                </h2>
                <p className="max-w-72 text-xs text-gray-400">
                  {step.description}
                </p>
              </div>
              <div className="text-3xl" style={{ color: step.color }}>
                <step.icon />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
