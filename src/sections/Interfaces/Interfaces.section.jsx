import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { INTERFACES } from "../../utils/data";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Interfaces = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center mt-24 px-6 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-xl text-gray-900 font-bold text-3xl"
      >
        Interfaces of Sales and Distribution Management System
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-full max-w-7xl">
        {INTERFACES.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: index * 0.4 }}
            className="flex flex-col items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-56 overflow-hidden rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="uppercase text-xl font-bold text-gray-900 mt-5 text-center">
              {item.name}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interfaces;
