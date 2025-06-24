import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { COUNTS, RATES } from "../../utils/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Stories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="stories"
      className="w-full min-h-[100vh] flex flex-col items-center justify-center pt-28 px-6 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-gray-900 text-3xl font-bold text-center max-w-lg mb-24"
      >
        <span className="text-cyan-500">Salesync DMS</span> Success Stories,
        Take A Look To Grow You Business
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 mb-20"
      >
        {RATES.map((rate, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-lg flex flex-col p-5"
            style={{ borderLeft: `12px solid ${rate.color}` }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-cyan-400 text-4xl font-bold mb-10">
              <span>
                <CountUp
                  start={0}
                  end={rate.rate}
                  duration={2}
                  suffix="%"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>
            </h3>
            <p className="text-[16px] text-gray-950 font-medium mb-10">
              {rate.description}
            </p>
            <div className="w-10 h-10 flex relative bg-cyan-400/10 rounded-full">
              {rate.icon && (
                <rate.icon className="text-4xl text-cyan-400 absolute -right-1 -bottom-1" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full min-h-[50vh] bg-cyan-100/80 flex items-center justify-center px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-7xl">
          {COUNTS.map(
            (
              {
                icon: Icon,
                bg,
                iconColor,
                number,
                label,
                suffix,
                numberFormat,
              },
              i
            ) => (
              <motion.div
                key={i}
                variants={statVariants}
                className="flex flex-row gap-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-10 h-10 rounded-full ${bg} flex relative`}>
                  <Icon
                    className={`absolute -bottom-2 -right-2 ${iconColor} text-4xl`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-3xl font-medium text-gray-900">
                    <CountUp
                      start={0}
                      end={number}
                      duration={2}
                      separator={numberFormat ? "," : ""}
                      suffix={suffix ?? ""}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </p>
                  <p className="text-[14px] font-semibold text-gray-600">
                    {label}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Stories;
