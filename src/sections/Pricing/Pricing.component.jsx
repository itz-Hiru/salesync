import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DASHBOARD from "../../assets/dashboard.jpg";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className="flex flex-col-reverse md:flex-row justify-center gap-5 w-full min-h-[80vh] py-24 px-6 md:px-12"
    >
      <motion.div
        className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start mt-16 md:mt-0"
        variants={fadeSlideLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-start">
          Witness The Power Of Real Time Dashboard
        </h2>
        <div className="w-full md:max-w-sm max-w-xs flex justify-center items-center">
          <div className="flex w-full flex-row justify-between mb-12">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-center md:text-start">Before</p>
              <p className="text-sm text-gray-700 font-medium">
                1500 clicks per day
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-center md:text-start">After</p>
              <p className="text-sm text-cyan-600 font-medium">
                2650 clicks per day
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="text-white text-[17px] font-medium bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3.5 rounded cursor-pointer"
        >
          Get results for your business
        </button>
      </motion.div>

      <motion.div
        className="flex w-full md:w-1/2 items-center justify-center"
        variants={fadeSlideRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src={DASHBOARD}
          alt="dashboard image"
          className="rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Pricing;
