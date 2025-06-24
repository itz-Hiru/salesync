import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FAQs } from "../../utils/data";

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="blogs"
      ref={sectionRef}
      className="w-full min-h-[90vh] flex flex-col items-center justify-center pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {FAQs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                type="button"
                className="flex items-center w-full text-left font-semibold text-gray-800 focus:outline-none transition-transform duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <motion.div
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mr-2 flex items-center"
                >
                  <FiChevronRight className="w-5 h-5" />
                </motion.div>
                <span className={activeIndex === index ? "text-cyan-700" : ""}>
                  {faq.question}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-2 pl-6 text-gray-700 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blogs;
