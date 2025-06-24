import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import QUOTE from "../../assets/quote-symbol.png";
import { TESTIMONIALS } from "../../utils/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const innerFadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.6 },
  },
};

const Testimonials = () => {
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
        className="font-bold text-gray-900 text-3xl mb-1"
      >
        Customer Reviews
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="text-sm text-gray-700 font-medium mb-16"
      >
        AI Powered lead generation
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="relative w-full flex flex-col shadow-xl shadow-cyan-300/40 border border-cyan-200/50 rounded-xl overflow-hidden cursor-pointer"
          >
            <motion.div variants={innerFadeVariants} className="p-5 pb-48">
              <img src={QUOTE} alt="quote symbol" className="w-8 mb-4" />
              <p className="text-center text-sm text-gray-600">
                {testimonial.description}
              </p>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full z-0">
              <svg
                className="w-full h-64"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  d="M-16.24,104.92 C150.00,150.00 271.74,31.53 500.00,100.00 L500.00,150.00 L0.00,150.00 Z"
                  className="fill-cyan-400"
                />
              </svg>
            </div>

            <motion.div
              variants={innerFadeVariants}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full px-4 flex flex-col items-center z-10"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 object-cover rounded-full border-3 border-white shadow-md -mt-12"
              />
              <h3 className="mt-4 text-white font-semibold">
                {testimonial.name}
              </h3>
              <div className="flex gap-4 mt-2 text-white text-sm">
                {testimonial.facebook && (
                  <a
                    href={testimonial.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                )}
                {testimonial.twitter && (
                  <a
                    href={testimonial.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                )}
                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
