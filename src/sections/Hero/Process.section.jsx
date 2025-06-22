import React from "react";
import LOGO from "../../assets/logo.png";
import { steps } from "../../utils/data";

const connectorPositions = [
  { top: "-150px", left: "50%", transform: "translateX(-50%)" },
  { top: "50%", right: "250px", transform: "translateY(-50%)" },
  { bottom: "-160px", left: "50%", transform: "translateX(-50%)" },
  { top: "50%", left: "250px", transform: "translateY(-50%)" },
];

const Process = () => {
  return (
    <div className="hidden xl:flex flex-col py-45">
      <div className="relative w-full flex justify-center items-center py-32">
        <div className="relative w-64 h-64 rounded-full bg-transparent border-[15px] border-t-[#06B6D4] border-r-[#0E7490] border-b-[#164E63] border-l-[#155E75] flex items-center justify-center z-10">
          <div className="w-56 h-56 rounded-full bg-white flex items-center justify-center">
            <img src={LOGO} alt="logo" className="w-36 h-auto" />
          </div>
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className="absolute w-56 p-4 bg-white rounded-md shadow-lg flex flex-col items-center"
            style={{
              ...connectorPositions[index],
              position: "absolute",
              color: step.color,
            }}
          >
            <div
              className="absolute w-1 h-16 z-0"
              style={{
                backgroundColor: step.color,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)",
                ...(index === 0 && {
                  top: "100%",
                  transform: "translateX(-50%) rotate(0deg)",
                }),
                ...(index === 1 && {
                  left: "-8px",
                  top: "50%",
                  transform: "translateY(-50%) rotate(90deg)",
                }),
                ...(index === 2 && {
                  top: "-65px",
                  transform: "translateX(-50%) rotate(0deg)",
                }),
                ...(index === 3 && {
                  left: "230px",
                  top: "50%",
                  transform: "translateY(-50%) rotate(90deg)",
                }),
              }}
            />
            <div className="flex items-center justify-center mb-2">
              <div
                className="border-4 w-16 h-16 flex flex-col items-center justify-center rounded-lg shadow-md text-sm font-bold uppercase"
                style={{
                  borderColor: step.color,
                  boxShadow: `0 0 10px ${step.color}`,
                }}
              >
                Step {step.step}
              </div>
            </div>
            <h2
              className="text-center text-lg font-semibold"
              style={{ color: step.color }}
            >
              {step.title}
            </h2>
            <p className="text-xs text-gray-500 text-center">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
