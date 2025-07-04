import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "../../components/Modals/Modal.component";
import { FEATURES } from "../../utils/data";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Features = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleLearnMore = (feature) => {
    setSelectedFeature(feature);
    setOpenModal(true);
  };

  return (
    <section
      id="features"
      ref={ref}
      className="min-h-[80vh] bg-cyan-100/10 flex flex-col items-start justify-center px-10 pt-28 pb-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex items-start"
      >
        <h2 className="max-w-[850px] text-gray-900 font-bold text-4xl">
          Our Software is more than a DMS - it's your sales development partner.
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full"
      >
        {FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-white rounded-lg p-5 flex flex-col"
            style={{
              boxShadow: "-4px -4px 15px rgba(103, 232, 249, 0.6)",
            }}
          >
            <div className="w-10 h-10 flex items-center bg-cyan-400 text-3xl text-white p-2 rounded-lg">
              <feature.icon />
            </div>
            <h3 className="text-gray-950 text-xl font-semibold mt-4">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            <div
              className="text-sm font-semibold mt-4 hover:underline cursor-pointer"
              onClick={() => handleLearnMore(feature)}
            >
              Learn more
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} hideHeader>
        {selectedFeature && (
          <div className="p-5">
            <h3 className="text-xl font-bold mb-4">{selectedFeature.title}</h3>
            {selectedFeature.fullDescription.split("\n").map((line, index) => {
              const trimmed = line.trim();
              if (trimmed.startsWith("-")) {
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside text-gray-700 text-sm"
                  >
                    <li className="mb-2">{trimmed.slice(1).trim()}</li>
                  </ul>
                );
              } else if (trimmed) {
                return (
                  <p key={index} className="mb-2 mt-4 text-gray-900 text-sm">
                    {trimmed}
                  </p>
                );
              }
              return null;
            })}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Features;
