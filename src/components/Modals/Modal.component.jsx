import { AnimatePresence, motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 30,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Modal = ({ isOpen, onClose, title, hideHeader, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/30"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col bg-white shadow-md shadow-black/30 rounded-lg overflow-hidden max-w-full w-[90vw] md:w-[35vw] max-h-[90vh]"
          >
            {!hideHeader && (
              <div className="flex items-center justify-between p-4 border-b border-black/20">
                <h3 className="md:text-lg font-medium text-black/90">
                  {title}
                </h3>
              </div>
            )}
            <button
              type="button"
              className="text-black/40 bg-transparent hover:bg-rose-500 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center text-center absolute top-3.5 right-3.5 cursor-pointer"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
