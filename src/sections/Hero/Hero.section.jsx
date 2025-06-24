import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import HERO from "../../assets/hero-image.jpg";
import BarChartCard from "../../components/Cards/BarChartCard.component";
import LineChartCard from "../../components/Cards/LineChartCard.component";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.5,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hero"
      ref={ref}
      className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center w-full min-h-[80vh]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col w-full md:w-1/2 items-start justify-center"
      >
        <motion.div
          variants={fadeItem}
          className="w-full items-center hidden md:flex gap-2"
        >
          <div className="w-[30px] h-[2px] bg-gray-600" />
          <p className="text-sm font-medium text-gray-600">
            Retail Sales & Distribution With Salesync DMS
          </p>
        </motion.div>

        <motion.h1
          variants={fadeItem}
          className="text-[26px] md:text-[40px] text-center md:text-start font-bold text-cyan-500 mt-0 md:mt-8 leading-tight"
        >
          Finally, A{" "}
          <span className="bg-cyan-200/50 text-cyan-700">Software Company</span>{" "}
          That Excels As Your Sales Development Partner
        </motion.h1>

        <motion.p
          variants={fadeItem}
          className="text-sm text-slate-700 mt-4 font-medium hidden md:block"
        >
          (Like 0 To 1000 New Sales Per Month Kind Of Results)
        </motion.p>

        <motion.div
          variants={fadeItem}
          className="mt-10 flex flex-col gap-2 text-gray-700"
        >
          {["Boost Sales", "Advanced Analytics", "Data Driven Decisions"].map(
            (item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                className="flex flex-row gap-2 items-center text-base font-medium"
              >
                <IoCheckmarkSharp className="text-cyan-400 text-[18px]" />
                {item}
              </motion.div>
            )
          )}
        </motion.div>

        <motion.button
          variants={fadeItem}
          type="button"
          className="bg-cyan-400 text-white px-6 py-2.5 flex flex-row gap-2 items-center font-medium text-[16px] rounded mt-8 group transition-all duration-300"
        >
          Request Demo
          <FaArrowRight className="text-[15px] group-hover:translate-x-1" />
        </motion.button>
      </motion.div>

      <motion.div
        variants={fadeItem}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex relative w-full md:w-1/2"
      >
        <motion.img
          src={HERO}
          alt="salesync hero image"
          className="w-full h-auto rounded"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -left-16 hidden sm:block"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.9, ease: "easeInOut" }}
        >
          <LineChartCard />
        </motion.div>
        <motion.div
          className="absolute bottom-24 -right-10 hidden sm:block"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.9, ease: "easeInOut" }}
        >
          <BarChartCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
