import { useState } from "react";
import { FAQs } from "../../utils/data";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="blogs"
      className="w-full min-h-[90vh] flex flex-col items-center justify-center pt-20"
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
              {activeIndex === index ? (
                <FiChevronDown className="w-5 h-5 mr-2" />
              ) : (
                <FiChevronRight className="w-5 h-5 mr-2" />
              )}
              {activeIndex === index ? (
                <span className="text-cyan-700">{faq.question}</span>
              ) : (
                <span>{faq.question}</span>
              )}
            </button>
            {activeIndex === index && (
              <div className="mt-2 pl-6 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
