import LOGO from "../../assets/logo.png";
import { steps } from "../../utils/data";

const Process = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold">DMS Process Diagram</h2>
      <div className="flex flex-col md:flex-row gap-25 justify-center items-center mt-16">
        <div className="w-64 h-64 rounded-full bg-transparent border-15 border-t-[#06B6D4] border-r-[#0E7490] border-l-[#155E75] border-b-[#164E63] flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-white items-center justify-center flex">
            <img src={LOGO} alt="logo" className="w-36 h-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-lg flex flex-row gap-4 items-center justify-center"
            >
              <div
                className="flex flex-col items-center justify-center border-4 w-18 h-18 bg-white shadow-md rounded-lg "
                style={{
                  borderColor: step.color,
                  boxShadow: `0 2px 10px ${step.color}`,
                }}
              >
                <p className="uppercase font-medium text-sm text-gray-700">
                  Step
                </p>
                <span className="text-2xl font-semibold -mt-2 text-shadow-md text-shadow-black/30">
                  {step.step}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold "
                  style={{
                    color: step.color,
                    textShadow: `0 0px 2px ${step.color}`,
                  }}
                >
                  {step.title}
                </h2>
                <p className="max-w-72 text-xs text-gray-400">
                  {step.description}
                </p>
              </div>
              <div className="text-3xl" style={{ color: step.color }}>
                <step.icon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
