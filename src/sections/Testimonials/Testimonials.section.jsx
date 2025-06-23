import { TESTIMONIALS } from "../../utils/data";
import QUOTE from "../../assets/quote-symbol.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-25">
      <h2 className="font-bold text-gray-900 text-3xl mb-1">
        Customer Reviews
      </h2>
      <p className="text-sm text-gray-700 font-medium mb-16">
        AI Powered lead generation
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="relative w-full flex flex-col shadow-xl shadow-cyan-300/40 border border-cyan-200/50 rounded-xl overflow-hidden"
          >
            <div className="p-5 pb-48">
              <img src={QUOTE} alt="quote symbol" className="w-8 mb-4" />
              <p className="text-center text-sm text-gray-600">
                {testimonial.description}
              </p>
            </div>
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
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full px-4 flex flex-col items-center z-10">
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
                    className="cursor-pointer"
                  >
                    <FaFacebook className="text-xl text-white" />
                  </a>
                )}
                {testimonial.twitter && (
                  <a
                    href={testimonial.twitter}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <FaTwitter className="text-xl text-white" />
                  </a>
                )}
                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <FaLinkedin className="text-xl text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
