import { WORKFLOWS } from "../../utils/data";

const WorkFlow = () => {
  return (
    <div className="w-full bg-cyan-50/20 min-h-[80vh] p-10 flex flex-col justify-center items-center mt-10">
      <h2 className="max-w-xl text-3xl font-bold text-gray-900 text-center">
        Use powerfull SALESYNC Workflow, Designer For Your Industry
      </h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {WORKFLOWS.map((workflow, index) => (
          <div
            key={index}
            className="flex flex-col bg-white items-center justify-center rounded-lg border border-gray-400 p-5"
            style={{ boxShadow: "-10px -10px 0px rgba(103, 232, 249, 0.5)" }}
          >
            <div className="mt-8 w-16 h-16 flex items-center justify-center rounded-full border-2 border-cyan-600">
              <workflow.icon className="text-3xl text-cyan-600" />
            </div>
            <h3 className="mt-8 font-semibold text-gray-900 text-xl">
              {workflow.title}
            </h3>
            <p className="mt-6 text-sm text-gray-500 text-center mb-16">
              {workflow.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
