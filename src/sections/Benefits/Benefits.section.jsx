import { BENEFITS } from "../../utils/data";

const Benefits = () => {
  return (
    <div className="w-full min-h-[80vh] bg-cyan-50/20 flex flex-col justify-center mt-25 p-10">
      <h2 className="text-3xl text-center font-bold text-gray-900 mb-16">
        Benefits of <span className="text-cyan-400">SALESYNC</span> in
        Distribution Business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className="bg-white flex flex-col rounded-lg py-10 px-5 items-center justify-center border border-gray-200/50 shadow-xs shadow-gray-800/50"
          >
            <benefit.icon className="bg-cyan-400 text-white text-5xl p-3 rounded-md mb-5" />
            <h3 className="text-center font-semibold text-gray-800 text-[15px] mb-3">
              {benefit.title}
            </h3>
            <p className="text-center text-sm text-gray-500 mb-5">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
